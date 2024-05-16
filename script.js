document.addEventListener('DOMContentLoaded', () => {
    const downloadButton = document.getElementById('downloadButton');

    const cvArrowLink = document.getElementById('cvArrowLink');

    const cvUrl = 'Curriculum Vitae.pdf'; 

    downloadButton.addEventListener('click', () => {
        const downloadLink = document.createElement('a');
        downloadLink.href = cvUrl;
        downloadLink.download = 'AbhishekChauhan_CV.pdf';
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    });

    cvArrowLink.addEventListener('click', (event) => {
        event.preventDefault(); 

        window.open(cvUrl, '_blank');
    });
});
