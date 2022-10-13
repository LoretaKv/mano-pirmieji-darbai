// Organizuojate vestuves - pasiimkite informaciją iš
//  "https://boiling-reaches-93648.herokuapp.com/week-3/wedding"
//  ir atvaizduokite lentelėje: vardą, plusOne ir attending.
// Parašykite taip, kad plusOne ir attending būtų ne true/false, bet "+" arba "-".

const guestList = async () => {
  const collectGuests = await fetch(
    `https://boiling-reaches-93648.herokuapp.com/week-3/wedding`
  );
  if (response.ok) {
    const attendeedata = await response.json();
  }
  catch(error){
    console.error(error)
  }
};
