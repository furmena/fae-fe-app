function SearchBarShortcuts() {
  const list_of_topics = [
    "Cooking",
    "DIY",
    "Drawing",
    "Electronics",
    "Maths",
    "Gaming",
    "Baking",
    "Writing",
  ];
  const fav_topics: Array<String> = ["Cooking", "DIY", "Baking", "Writing"];
  let difference = list_of_topics.filter((x) => !fav_topics.includes(x));

  if (list_of_topics.length === 0) {
    return <p>topics not found</p>;
  } else {
    return (
      <div>
        {fav_topics.map((fav_topic: String) => (
          <a
            href={"https://www.google.com/search?q=" + fav_topic}
            target="_blank"
          >
            <p>
              <button>{fav_topic + " ⭐"}</button>
            </p>
          </a>
        ))}
        {difference.map((differencent: String) => (
          <a
            href={"https://www.google.com/search?q=" + differencent}
            target="_blank"
          >
            <p>
              <button>{differencent}</button>
            </p>
          </a>
        ))}
      </div>
    );
  }
}

export default SearchBarShortcuts;
