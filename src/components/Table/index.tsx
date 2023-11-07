import React, { useState, useEffect, useRef } from 'react';
import debounce from 'lodash/debounce';
import { PrettyTableProps } from './index.d';
import SearchIcon from "@/assets/search.png";

const PrettyTable: React.FC<PrettyTableProps<any>> = ({ table_data, styles, searchColumns }) => 
{
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
      table_data.getRowsData().forEach((row, rowIndex) => 
      {
        if (columnsToSearch.some(key => 
        {
          const data = row.find(cell => cell.key === key)?.data?.toString().toLowerCase();
        //   console.log(`data is: ${data}, value is: ${searchValue.toLowerCase()}`);
          return data && data.includes(searchValue.toLowerCase());
        })) 
        {
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
        <h1>{table_data.getHeaderName()}</h1>
        <div className={styles['pretty-table__header__input-group']}>
          <input type="search" placeholder={'Search for: '.concat(searchColumns?.length ? searchColumns.join(',') : '请输入搜索内容', '...')} onChange={handleSearchTextChange} />
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
                    {cell.render ? cell.render(cell.data, cell.key) : cell.data}
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
