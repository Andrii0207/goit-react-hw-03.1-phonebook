const Contacts = ({ contacts, title, children, onDelete }) => {
  return (
    <div>
      <h2>{title}</h2>
      {children}
      <ul>
        {contacts.length > 0
          ? contacts.map(({ id, name, number }) => (
              <li key={id} style={{ display: 'flex', marginBottom: '20px' }}>
                <p style={{ marginRight: '50px' }}>
                  {name}: {number}
                </p>
                <button type="button" onClick={() => onDelete(id)} style={{ width: '100px' }}>
                  Delete
                </button>
              </li>
            ))
          : 'There are no contacts'}
      </ul>
    </div>
  );
};

export default Contacts;
