export async function fetchPdf() {
    try {
      const pdfResponse = await fetch('/resume/Riley_Lawson.pdf');
      const pdfBlob = await pdfResponse.blob();
      const pdfUrl = URL.createObjectURL(pdfBlob);

      return pdfUrl;
    } 
    catch (error) {
      console.error('Error fetching PDF:', error);
      
      return null;
    }
  }