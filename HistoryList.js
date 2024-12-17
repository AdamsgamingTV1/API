import React from 'react';
import HistoryItem from './HistoryItem';

const HistoryList = ({history, onDelete, onRate}) => {
    return (
        <div className="mt-4">
      <h3>History</h3>
      <ul className="list-group">
        {history.map(item => (
          <HistoryItem 
            key={item.id}
            item={item}
            onDelete={onDelete}
            onRate={onRate}
          />
        ))}
      </ul>
    </div>
    );
};

export default HistoryList;
