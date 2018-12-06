
// Funções para mostrar e esconder a janela do Vídeo
function showVideo(src) {    
    const ifrVideo = document.getElementById("ifrVideo")    
    const dlgVideo = document.getElementById("dlgVideo")
    ifrVideo.src = src    
    dlgVideo.showModal()
}

function closeVideo() {        
    const dlgVideo = document.getElementById("dlgVideo")
    dlgVideo.close()
}

// Funções para mostrar e esconder a janela do PDF
function showPdf(src) {    
    const objPdf = document.getElementById("objPdf")    
    const dlgPdf = document.getElementById("dlgPdf")
    objPdf.data = src    
    dlgPdf.showModal()
}

function closePdf() {        
    const dlgPdf = document.getElementById("dlgPdf")
    dlgPdf.close()
}