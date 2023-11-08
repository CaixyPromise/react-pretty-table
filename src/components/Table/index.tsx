import React, { useState, useEffect, useRef } from 'react';
import debounce from 'lodash/debounce';
import { PrettyTableProps, Action, CellData } from './index.d';
import SearchIcon from "@/assets/search.png";
import styles from './index.module.scss';

const PrettyTable: React.FC<PrettyTableProps<any>> = ({ table_data, description, searchColumns }) => 
{
  const renderCellContent = (cell: CellData<any>) => 
  {
    return (
      <React.Fragment>
        {/* {cell.data} */}
        {cell.actions ? cell.actions && cell.actions.map((action:Action, index:number) => 
        {
          switch (action.type) {
            case 'link':
              return <a href={action.content} key={index}>{cell.data}</a>;
            case 'button':
              return <p className={styles.button} onClick={action.onClick} key={index}>{action.content}</p>;
            default:
              return cell.data;
          }
        }) : cell.data}
      </React.Fragment>
    );
  };

  const [highlightedRows, setHighlightedRows] = useState(new Set<number>());
  const [searchText, setSearchText] = useState("");
  const firstRowRef = useRef<HTMLTableRowElement>(null);

  // 处理搜索文本变化
  const handleSearchTextChange = (event: React.ChangeEvent<HTMLInputElement>) => 
  {
    setSearchText(event.target.value);
  };

  const debouncedSearch = useRef(
    debounce((searchValue) => 
    {
        if (!searchValue.trim()) {
            // 如果搜索文本为空或只包含空格，清除所有高亮行
            setHighlightedRows(new Set());
            return;
        }
      const newHighlightedRows = new Set<number>();
      
      const columnsToSearch = searchColumns?.length ? searchColumns : table_data.getColumnsData().map(col => col.key);
      // console.log(columnsToSearch) 
      // 对每一行数据进行迭代
      table_data.getRowsData().forEach((row, rowIndex) => {
        // 确保对每一个需要搜索的列键进行迭代
        const searchResults = columnsToSearch.map(key => {
          // 找到对应列键的单元格数据
          const cellData = row.find(cell => cell.key === key);
          // console.log(cellData)
          // 如果单元格数据存在，并且其包含搜索值，则返回true
          return cellData?.data?.toString().toLowerCase().includes(searchValue.toLowerCase());
        });

        // 如果任何一个搜索结果为true，将行索引添加到高亮集合中
        if (searchResults.some(isMatch => isMatch)) {
          newHighlightedRows.add(rowIndex);
        }
      });
      setHighlightedRows(newHighlightedRows);
    }, 300)
  ).current;

  // 监听搜索文本变化，执行搜索
  useEffect(() => 
  {
    debouncedSearch(searchText);
  }, [searchText, debouncedSearch]);

  // 高亮行变化时滚动到第一个高亮的行
  useEffect(() => 
  {
    if (highlightedRows.size > 0 && firstRowRef.current) 
    {
      firstRowRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      console.log('length is:', highlightedRows.size)
    }
  }, [highlightedRows]);
  
  return (
    <main className={styles['pretty-table']}>
      <section className={styles['pretty-table__header']}>
        <div className={styles['header-content']}> {/* 添加一个新的 div 用于包裹标题和描述 */}
          <h1>{table_data.getHeaderName()}</h1>
          {description && <p className={styles['description']}>{description}</p>} {/* 条件渲染描述信息 */}
        </div>
        <div className={styles['pretty-table__header__input-group']}>
          <input type="search" placeholder={'Search for: '.concat(searchColumns?.length ? searchColumns.join(', ') : '请输入搜索内容', '...')} onChange={handleSearchTextChange} />
          <img src={SearchIcon} alt='搜索' onClick={() => searchText.trim() && debouncedSearch(searchText)} />
        </div>
      </section>
      <section className={styles['pretty-table__shell']}>
        <table>
          <thead>
            <tr>
              {table_data.getColumnsData().map(header => <th key={header.key}>{header.label}</th>)}
            </tr>
          </thead>
          <tbody>
            {table_data.getRowsData().map((row, rowIndex) => (
              <tr key={rowIndex} ref={rowIndex === 0 ? firstRowRef : null}>
                {row.map((cell) => 
                (
                    <td key={cell.key} 
                        className={highlightedRows.has(rowIndex) ? styles.highlighted : ''}
                    >
                       {renderCellContent(cell)}
                    {/* {cell.render ? cell.render(cell.data, cell.key) : cell.data} */}
                    </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
};

export { PrettyTable };
