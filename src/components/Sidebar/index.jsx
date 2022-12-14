import ReactMarkdown from "react-markdown";

const Sidebar = ({ notes, onAddNote, onDeleteNote, activeNote, setActiveNote }) => {
  const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified);
   
  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <h1>Notepad</h1>
        <button onClick={onAddNote}>Ajouter une note</button>
      </div>
      <div className="app-sidebar-notes">
        {sortedNotes.map(({ id, title, body, lastModified }) => (
          <div className={`app-sidebar-note ${id === activeNote && "active"}`}
            key={id}
            onClick={() => setActiveNote(id)}
          >
            <div className="sidebar-note-title">
              <strong>{title}</strong>
              <button onClick={(e) => onDeleteNote(id)}>Supprimer</button>
            </div>
            <ReactMarkdown className="markdown-preview">{body && body.substr(0, 100) + "..."}</ReactMarkdown>
            <small className="note-meta">
              Modifié le{" "}
              {new Date(lastModified).toLocaleDateString("en-GB", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
