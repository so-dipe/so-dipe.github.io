function downloadResume() {
    const element = document.querySelector(".letter-container");
    const opt = {
      margin: 5,
      filename: `$sodipe_resume.pdf`,
      image: { type: "jpeg", quality: 1 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    html2pdf().from(element).set(opt).save();
  }