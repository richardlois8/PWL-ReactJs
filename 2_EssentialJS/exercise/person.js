// 1. set default value = fullName = "unknown", age = 25, isMale = false,
const Person = (fullName = "unknown", age = 25, isMale = false, avatar) => {
  // ternary operator, menggantikan if-else
  const info = () => {
    // 2. tampilkan full name, sex dan age
    return `Full Name: ${fullName}, Sex: ${
      isMale ? "Laki-laki" : "Perempuan"
    }, Age: ${age} years`;
  };
  return {
    get getInfo() {
      // 3. kembalikan nilai info diatas
      return info();
    },
    toString() {
      // 4. kembalikan nilai info diatas
      return info();
    },
    addAge: (inpAge) => age + inpAge, // 5. kembalikan usia sekarang ditambah dengan tahun inputan user,
    setAge: (inpSetAge) => (age = inpSetAge), // 6. fungsi yang mengeset usia yang baru,
    rename: (inpName) => (fullName = inpName), // 7. fungsi yang mengeset nama yang baru,
    // 8. kembalikan semua nilai dengan shorthand property
    fullName, age, isMale, avatar
  };
};
export default Person;