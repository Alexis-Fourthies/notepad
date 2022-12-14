import NoteDisplay from 'components/NoteDisplay';
import MarkdownInput from 'components/MarkdownInput';

const Main = ({ activeNote, onUpdateNote }) => {
  if (!activeNote) return <div className="no-active-note">Aucune note sélectionnée</div>;
   
  return (
    <div className="app-main">
      <NoteDisplay activeNote={activeNote} />
      <MarkdownInput activeNote={activeNote} onUpdateNote={onUpdateNote} />
    </div>
  );
};

export default Main;
