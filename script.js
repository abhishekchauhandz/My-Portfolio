document.addEventListener('DOMContentLoaded', () => {
    const downloadButton = document.getElementById('downloadButton');

    const cvArrowLink = document.getElementById('cvArrowLink');

    const cvUrl = 'Abhishek_Chauhan_Frontend_developer.pdf'; 

    downloadButton.addEventListener('click', () => {
        const downloadLink = document.createElement('a');
        downloadLink.href = cvUrl;
        downloadLink.download = 'AbhishekChauhan_CV.pdf';hv
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    });

    cvArrowLink.addEventListener('click', (event) => {
        event.preventDefault(); 

        window.open(cvUrl, '_blank');
    });
});
