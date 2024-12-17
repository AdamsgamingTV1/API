import React from "react";

const HistoryItem = ({ item, onDelete, onRate }) => {
    return (
      <li className="list-group-item">
        <p>{item.quote}</p>
        <div className="d-flex justify-content-between">
          <div>
            <button className="btn btn-sm btn-danger" onClick={() => onDelete(item.id)}>Delete</button>
            <div className="rating">
              {[1, 2, 3, 4, 5].map(rating => (
                <button
                  key={rating}
                  className={`btn btn-sm ${item.rating >= rating ? 'btn-warning' : 'btn-outline-warning'}`}
                  onClick={() => onRate(item.id, rating)}
                >
                  {rating}
                </button>
              ))}
            </div>
          </div>
          {item.rating && <span className="badge bg-secondary">Rating: {item.rating}</span>}
        </div>
      </li>
    );
  };

export default HistoryItem;
