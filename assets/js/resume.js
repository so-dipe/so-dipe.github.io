function downloadResume() {
    const doc = new jsPDF();
    const elementHandler = {
        '#ignorePDF': function (element, renderer) {
            return true;
        }
    };

    const source = window.document.getElementById("letter-container");

    doc.fromHTML(
        source,
        15,
        15,
        {
            'width': 170,
            'elementHandlers': elementHandler
        },
        function () {
            doc.save('sodipe_paul_resume.pdf');
        }
    );
}
