document.getElementById('user-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const gender = document.getElementById('gender').value;
    initializeBodyModel(gender);
});

function initializeBodyModel(gender) {
    const container = document.getElementById('body-container');
    container.innerHTML = ''; // Clear previous content

    // Set up the 3D scene (you'll need to replace this with a proper model later)
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    // Placeholder geometry (replace with a body model later)
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    function animate() {
        requestAnimationFrame(animate);
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render(scene, camera);
    }
    animate();

    // Click event to display information
    renderer.domElement.addEventListener('click', function() {
        // Display info based on what part is clicked
        showInfo("Example Body Part: Strengthening Tips...");
    });
}

function showInfo(info) {
    const infoBox = document.getElementById('info-box');
    infoBox.textContent = info;
    infoBox.style.display = 'block';
}
