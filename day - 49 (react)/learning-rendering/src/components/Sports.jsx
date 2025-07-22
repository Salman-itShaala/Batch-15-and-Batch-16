function Sports() {

  const sports = [ "Cricket", "Football", "Hockey", "Tennis", "Basketball", "Kabaddi" ];

  return (
    <div>
      <ol>
        {sports.map((sportName) => <li key={sportName}>{sportName}</li>)}
      </ol>
    </div>
  );
}

export default Sports;
