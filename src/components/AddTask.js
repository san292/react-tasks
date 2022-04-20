import { useState } from 'react';

// ADD task (function pour ajouter une tache )
const AddTask = ({ onAdd }) => {
  // state pour recuperer le contenu des inputs ansi que la checkbox
  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState(false);
  //on soumi le formulaire
  const onSubmit = (e) => {
    e.preventDefault();

    // petite condition au cas ou l'utilisateur a oublié de taper du texte
    if (!text) {
      alert('veuillez saisir votre texte svp!');
      return;
    }
    onAdd({ text, day, reminder });
    // on vide les input on remettant à jour le state
    setText('');
    setDay('');
    setReminder(false);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="Add task"
          value={text}
          onChange={(event) => {
            setText(event.target.value);
          }}
        ></input>
      </div>
      <div className="form-control">
        <label> Day & Time</label>
        <input
          type="text"
          placeholder="Add Day & Time"
          value={day}
          onChange={(event) => {
            setDay(event.target.value);
          }}
        ></input>
      </div>
      <div className="form-control-check ">
        <label>Set Reminder</label>
        <input
          type="checkbox"
          value={reminder}
          checked={reminder}
          onChange={(event) => {
            setReminder(event.currentTarget.checked);
          }}
        ></input>
      </div>
      <input className="btn btn-block" type="submit" value="Save Task"></input>
    </form>
  );
};

export default AddTask;
