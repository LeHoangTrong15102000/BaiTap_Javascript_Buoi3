// code

// Bài 1
document.querySelector('#btnInKetQua1').onclick = () => {
  const soThuNhat = Number(document.querySelector('#soThuNhat_b1').value);
  const soThuHai = Number(document.querySelector('#soThuHai_b1').value);
  const soThuBa = Number(document.querySelector('#soThuBa_b1').value);

  if (soThuNhat > soThuHai && soThuNhat > soThuBa) {
    if (soThuHai > soThuBa) {
      document.querySelector(
        '#ketQuaBai1'
      ).textContent = `Các số theo thứ tự tăng dần là: ${soThuBa} -> ${soThuHai} -> ${soThuNhat}`;
    } else if (soThuHai < soThuBa) {
      document.querySelector(
        '#ketQuaBai1'
      ).textContent = `Các số theo thứ tự tăng dần là: ${soThuHai} -> ${soThuBa} -> ${soThuNhat}`;
    }
  } else if (soThuHai > soThuNhat && soThuHai > soThuBa) {
    if (soThuNhat > soThuBa) {
      document.querySelector(
        '#ketQuaBai1'
      ).textContent = `Các số theo thứ tự tăng dần là: ${soThuBa} -> ${soThuNhat} -> ${soThuHai}`;
    } else if (soThuNhat < soThuBa) {
      document.querySelector(
        '#ketQuaBai1'
      ).textContent = `Các số theo thứ tự tăng dần là: ${soThuNhat} -> ${soThuBa} -> ${soThuHai}`;
    }
  } else if (soThuBa > soThuNhat && soThuBa > soThuHai) {
    if (soThuNhat > soThuHai) {
      document.querySelector(
        '#ketQuaBai1'
      ).textContent = `Các số theo thứ tự tăng dần là: ${soThuHai} -> ${soThuNhat} -> ${soThuBa}`;
    } else if (soThuNhat < soThuHai) {
      document.querySelector(
        '#ketQuaBai1'
      ).textContent = `Các số theo thứ tự tăng dần là: ${soThuNhat} -> ${soThuHai} -> ${soThuBa}`;
    }

    // In ra các số theo thứ tự tăng dần
  }
};

// Bài 2
document.querySelector('#btnInKetQua2').addEventListener('click', () => {
  const soThuNhat = Number(document.querySelector('#soThuNhat_b2').value);
  const soThuHai = Number(document.querySelector('#soThuHai_b2').value);
  const soThuBa = Number(document.querySelector('#soThuBa_b2').value);

  // kỹ thuật đặt lính canh
  let maxNumber = soThuNhat;

  if (soThuHai > soThuNhat && soThuHai > soThuBa) {
    maxNumber = soThuHai;
  } else if (soThuBa > soThuNhat && soThuBa > soThuHai) {
    maxNumber = soThuBa;
  }

  document.querySelector(
    '#ketQuaBai2'
  ).textContent = `Số lớn nhất trong các số nhập vào là: ${maxNumber}`;
});

// Bài 3
document.querySelector('#btnInKetQua3').onclick = () => {
  const soThuNhat = Number(document.querySelector('#soThuNhat_b3').value);
  const soThuHai = Number(document.querySelector('#soThuHai_b3').value);
  const soThuBa = Number(document.querySelector('#soThuBa_b3').value);

  let result = 0;

  // xét 3 trường hợp, if-elseif tới chết e chưa nghĩ ra cách khác
  if (soThuNhat % 2 === 0) {
    result = 1;
    if (soThuHai % 2 === 0 && soThuBa % 2 !== 0) {
      result = 2;
    } else if (soThuHai % 2 !== 0 && soThuBa % 2 === 0) {
      result = 2;
    } else if (soThuHai % 2 === 0 && soThuBa % 2 === 0) {
      result = 3;
    }
  } else if (soThuHai % 2 === 0) {
    result = 1;
    if (soThuNhat % 2 === 0 && soThuBa % 2 !== 0) {
      result = 2;
    } else if (soThuNhat % 2 !== 0 && soThuBa % 2 === 0) {
      result = 2;
    } else if (soThuNhat % 2 === 0 && soThuBa % 2 === 0) {
      result = 3;
    }
  } else if (soThuBa % 2 === 0) {
    result = 1;
    if (soThuHai % 2 === 0 && soThuNhat % 2 !== 0) {
      result = 2;
    } else if (soThuHai % 2 !== 0 && soThuNhat % 2 === 0) {
      result = 2;
    } else if (soThuHai % 2 === 0 && soThuNhat % 2 === 0) {
      result = 3;
    }
  }

  document.querySelector(
    '#ketQuaBai3'
  ).textContent = `Số các chữ số chẵn được nhập vào là: ${result}`;
};

// Bài 4

// Bài 5
