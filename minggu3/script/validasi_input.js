const form = document.getElementById("registerForm");

const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");

// Lihat / sembunyikan password
togglePassword.addEventListener("click", function () {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
});

form.addEventListener("submit", function(event) {
    let valid = true;

    // Ambil nilai input
    const username = document.getElementById("username").value.trim();
    const password = passwordInput.value;
    const nama = document.getElementById("nama").value.trim();
    const tanggalLahir = document.getElementById("tanggalLahir").value;
    const alamat = document.getElementById("alamat").value.trim();
    const telepon = document.getElementById("telepon").value.trim();

    // Reset pesan error
    document.querySelectorAll("p").forEach(function(p) {
        p.textContent = "";
    });

    // Username
    if (username === "") {
        document.getElementById("usernameError").textContent =
            "Username tidak boleh kosong.";
        valid = false;
    } else if (username.length < 3) {
        document.getElementById("usernameError").textContent =
            "minimal 3 karakter.";
        valid = false;
    }

    // Password
    if (password === "") {
        document.getElementById("passwordError").textContent =
            "Password tidak boleh kosong.";
        valid = false;
    } else if (password.length < 8) {
        document.getElementById("passwordError").textContent =
            "minimal 8 karakter.";
        valid = false;
    }

    // Nama
    if (nama === "") {
        document.getElementById("namaError").textContent =
            "Nama tidak boleh kosong.";
        valid = false;
    }

    // Tanggal Lahir
    if (tanggalLahir === "") {
        document.getElementById("tanggalLahirError").textContent =
            "Tanggal lahir tidak boleh kosong.";
        valid = false;
    } else {
        const today = new Date();
        const birthDate = new Date(tanggalLahir);

        today.setHours(0, 0, 0, 0);

        if (birthDate > today) {
            document.getElementById("tanggalLahirError").textContent =
                "Tanggal lahir tidak boleh future date.";
            valid = false;
        }
    }

    // Alamat
    if (alamat === "") {
        document.getElementById("alamatError").textContent =
            "Alamat tidak boleh kosong.";
        valid = false;
    }

    // Telepon
    if (telepon === "") {
        document.getElementById("teleponError").textContent =
            "Telepon tidak boleh kosong.";
        valid = false;
    } else if (!/^62\d{9,13}$/.test(telepon)) {
        document.getElementById("teleponError").textContent =
            "Nomor telepon harus diawali 62 dan terdiri dari 11-15 digit.";
        valid = false;
    }

    // Cegah form pindah ke dashboard jika tidak valid
    if (!valid) {
        event.preventDefault();
    }
});