const cekHariKerja = (day) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const days = ["senin", "selasa", "rabu", "kamis", "jumat"];
      let checkDays = days.find((item) => {
        return item === day;
      });
      if (checkDays) {
        resolve(checkDays);
      } else {
        reject(new Error("Hari ini bukan hari kerja"));
      }
    }, 3000);
  });
};

// Menggunakan async/await dengan try/catch
const checkWorkDay = async (day) => {
  try {
    const result = await cekHariKerja(day);
    console.log(result); // Jika resolve, cetak hari kerja
  } catch (error) {
    console.log(error.message); // Jika reject, cetak pesan error
  }
};

checkWorkDay("minggu");
