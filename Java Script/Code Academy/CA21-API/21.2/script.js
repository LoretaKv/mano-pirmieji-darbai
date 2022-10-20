// Naudojant "https://boiling-reaches-93648.herokuapp.com/week-3/party" -
// pasiimkite informaciją iš šito puslapio ir naudojant skirtingus array metodus, transformuokite
// duomenis bei išmeskite true/false ekrane - ar "Kristupas Lapeika" yra VIP, ar ne.

const ckeckIfGuestIsVIP = (guests, guestName) => {
  const guest = guests.find((guest) => guest.name === guestName);
  //document.body.innerText=guest?`${guestName}${guest.vip?"is":"isn\'t"} a VIP`:`${guestName} isn`t found in the guest list`
  document.body.innerText = guest
    ? `${guestName} ${guest.vip ? "is" : "isn't"} a VIP`
    : `${guestName} isn't found in the guest list`;
};

const guestList = async () => {
  try {
    const response = await fetch(
      "https://boiling-reaches-93648.herokuapp.com/week-3/party"
    );
    if (response.ok) {
      const guests = await response.json();
      ckeckIfGuestIsVIP(guests, "Kristupas Lapeika");
    }
  } catch (error) {
    console.error(error);
  }
};
await guestList();
