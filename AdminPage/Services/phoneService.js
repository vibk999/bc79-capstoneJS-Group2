export class Services {
  getPhones = async () => {
    try {
      const res = await axios({
        url: "https://67769ad412a55a9a7d0c4e96.mockapi.io/phoneProduct",
        method: "GET",
      });
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  addPhone = async (phone) => {
    try {
      await axios({
        url: "https://67769ad412a55a9a7d0c4e96.mockapi.io/phoneProduct",
        method: "POST",
        data: phone,
      });
    } catch (err) {
      console.log(err);
    }
  };

  deletePhone = async (id) => {
    try {
      await axios({
        url: `https://67769ad412a55a9a7d0c4e96.mockapi.io/phoneProduct/${id}`,
        method: "DELETE",
      });
    } catch (err) {
      console.log(err);
    }
  };

  getPhoneById = async (id) => {
    try {
      const res = await axios({
        url: `https://67769ad412a55a9a7d0c4e96.mockapi.io/phoneProduct/${id}`,
        method: "GET",
      });
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  updatePhone = async (phone) => {
    try {
      await axios({
        url: `https://67769ad412a55a9a7d0c4e96.mockapi.io/phoneProduct/${phone.id}`,
        method: "PUT",
        data: phone,
      });
    } catch (err) {
      console.log(err);
    }
  };

  fetchAndSortDataMin = async (key) => {
    try {
      const response = await fetch(
        "https://67769ad412a55a9a7d0c4e96.mockapi.io/phoneProduct"
      );
      const data = await response.json();

      // Sắp xếp mảng theo key chỉ định (ví dụ: 'price')
      return data.sort((a, b) => a[key] - b[key]);
    } catch (error) {
      console.error("Đã xảy ra lỗi:", error);
      return [];
    }
  };
  fetchAndSortDataMax = async (key) => {
    try {
      const response = await fetch(
        "https://67769ad412a55a9a7d0c4e96.mockapi.io/phoneProduct"
      );
      const data = await response.json();

      // Sắp xếp mảng theo key chỉ định (giảm dần)
      return data.sort((a, b) => b[key] - a[key]);
    } catch (error) {
      console.error("Đã xảy ra lỗi:", error);
      return [];
    }
  };
}
