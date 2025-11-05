
const productos = [
  {
    link: "https://www.ds3comunicaciones.com/AMP/1859345-2.html",
    img: "https://www.ds3comunicaciones.com/AMP/images/1859218-2.jpg",
    titulo: "Cable UTP AMP Categoria 6 Chaqueta LSZH 1859345-2",
    descripcion: "El Cable UTP AMP Categoría 6 LSZH 1859345-2 ofrece alto rendimiento para redes Gigabit Ethernet, con chaqueta libre de halógenos que reduce emisiones tóxicas en caso de incendio."
  },
  {
    link: "https://www.ds3comunicaciones.com/AMP/1427254-4.html",
    img: "https://www.ds3comunicaciones.com/AMP/images/1427254-4-1.jpg",
    titulo: "Cable UTP AMP Categoria 6 Chaqueta CM 23 AWG 142725-4",
    descripcion: "Cable UTP AMP NetConnect Cat 6 (23 AWG, 4 pares, LSZH) excede las normas TIA/EIA-568-B.2-1 e ISO/IEC 11801, ideal para aplicaciones Gigabit Ethernet, VoIP y video digital."
  },
  {
    link: "https://www.ds3comunicaciones.com/AMP/219585-2.html",
    img: "https://www.ds3comunicaciones.com/AMP/images/219585-2_front.jpg",
    titulo: "Rollo de 305 metros Cable UTP Cat 6 de 23 AWG, CHAQUETA LSZH - 219585-2",
    descripcion: "El cable UTP Categoría 6 AMP NETCONNECT excede los estándares ANSI/TIA/EIA-568-B.2 e ISO/IEC 11801 Clase D, garantizando un desempeño superior y un sistema de cableado más robusto."
  },
  {
    link: "https://www.ds3comunicaciones.com/AMP/1859218-2.html",
    img: "https://www.ds3comunicaciones.com/AMP/images/1859218-2.jpg",
    titulo: "Cable UTP AMP Categoria 6A Apantallado Chaqueta LSZH 1859218-2",
    descripcion: "El Cable UTP AMP Categoría 6A Apantallado LSZH 1859218-2 ofrece transmisión de alta velocidad de hasta 10 Gbps, con excelente protección contra interferencias y chaqueta libre de halógenos."
  },
  {
    link: "https://www.ds3comunicaciones.com/AMP/1859381-2.html",
    img: "https://www.ds3comunicaciones.com/AMP/images/Caja.jpg",
    titulo: "Cable UTP AMP Categoria 6A Chaqueta LSZH IEC-60332-3 1859345-2",
    descripcion: "El Cable UTP AMP Categoría 6A LSZH IEC-60332-3 1859345-2 garantiza transmisión de hasta 10 Gbps con baja emisión de humos y alta resistencia al fuego."
  }
];

const contenedor = document.getElementById("productos-similares");

productos.forEach(p => {
  contenedor.innerHTML += `
    <a href="${p.link}" class="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-200 hover:border-blue-500">
      <div class="p-5 flex flex-col h-full">
        <div class="flex-grow flex items-center justify-center mb-4 h-40">
          <img src="${p.img}" alt="${p.titulo}" class="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105" />
        </div>
        <div class="border-t pt-4">
          <div class="flex justify-between flex-col items-center mb-2">
            <h3 class="text-lg font-bold text-gray-800">${p.titulo}</h3>
          </div>
          <p class="text-sm text-gray-600 mt-2 group-hover:text-gray-800 transition-colors line-clamp-2">
            ${p.descripcion}
          </p>
          <div class="text-center mt-6 text-blue-600 font-semibold">Ver Producto</div>
        </div>
      </div>
    </a>
  `;
});

