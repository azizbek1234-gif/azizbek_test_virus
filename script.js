// Modal oynani ochish
function downloadWarning() {
    document.getElementById('modal').style.display = 'block';
}

// Modal oynani yopish
function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// Faylni yuklash funksiyasi
function continueDownload() {
    // Faylga yo'l (HTML bilan bir xil papkada bo'lishi kerak)
    const fileUrl = 'virus.txt'; 
    
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'virus.txt'; // Yuklanganda fayl nomi
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Yuklab bo'lingach modalni yopish
    closeModal();
}