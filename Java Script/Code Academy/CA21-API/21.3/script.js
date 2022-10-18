// Organizuojate vestuves - pasiimkite informaciją iš
//  "https://boiling-reaches-93648.herokuapp.com/week-3/wedding"
//  ir atvaizduokite lentelėje: vardą, plusOne ir attending.
// Parašykite taip, kad plusOne ir attending būtų ne true/false, bet "+" arba "-".

const guestListDisplay = (attendeeData) => {
  const guestName = document.querySelector.apply("tbody");
  attendeeData.forEach((guest) => {
    const name = document.createElement("td");
    name.innerText = guest.name;
  });
};

const guestList = async () => {
  try {
    const response = await fetch(
      "https://boiling-reaches-93648.herokuapp.com/week-3/wedding"
    );
    if (response.ok) {
      const attendeeData = await response.json();
      guestLIstDisplay(attendeeData);
    }
  } catch (error) {
    console.error(error);
  }
};
