<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Change Paragraph Color</title>
</head>
<body>
    <p id="text">Ini adalah paragraf yang akan berubah warna.</p>
    <button id="changeColorButton">Change Color</button>

    <script>
        // Referensi ke elemen
        const paragraph = document.getElementById("text");
        const button = document.getElementById("changeColorButton");

        // Tambahkan event listener untuk tombol
        button.addEventListener("click", function() {
            // Ubah warna teks paragraf menjadi biru
            paragraph.style.color = "blue";
        });
    </script>
</body>
</html>

