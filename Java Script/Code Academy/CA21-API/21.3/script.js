// Organizuojate vestuves - pasiimkite informaciją iš
//  "https://boiling-reaches-93648.herokuapp.com/week-3/wedding"
//  ir atvaizduokite lentelėje: vardą, plusOne ir attending.
// Parašykite taip, kad plusOne ir attending būtų ne true/false, bet "+" arba "-".

const finalGuestLIst = (guests) => {
  guests.forEach((guest) => {
    const guestName = document.createElement("td");
    guestName.textContent = guest.name;

    const attending = document.createElement("td");
    attending.text = guest.attenging ? "+" : "-";

    const plusOne = document.createElement("td");
    plusOne.textContent = guest.plusOne ? "+" : "-";

    const guestListTobe = document.createElement("tr");
    tr.append(guestName, attending, plusOne);
    tbody.append(tr);
  });
};
const fetchGuestList = async () => {
  try {
    const response = await fetch(
      "https://boiling-reaches-93648.herokuapp.com/week-3/wedding"
    );
    if (response.ok) {
      await response.json();
      finalGuestLIst(guests);
    }
  } catch (error) {
    console.error(error);
  }
};
await fetchGuestList();
