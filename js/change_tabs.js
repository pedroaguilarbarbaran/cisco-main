document.addEventListener('DOMContentLoaded', function() {
    // Get tab elements
    const productTab = document.getElementById('product-tab');
    const imagesTab = document.getElementById('images-tab');
    const productSection = document.getElementById('information-section');
    const imagesSection = document.getElementById('images-section');

    // Get image elements
    const mainImage = document.getElementById('img_main');
    const thumbnails = document.querySelectorAll('.w-20 img'); // All thumbnail images
    const imageModal = document.getElementById('image-modal');
    const modalImage = document.getElementById('modal-image');

    // Tab switching functionality
    if (productTab && imagesTab) {
        productTab.addEventListener('click', function() {
            // Update tab styles
            productTab.classList.remove('bg-gray-100', 'text-gray-700');
            productTab.classList.add('bg-blue-600', 'text-white');
            imagesTab.classList.remove('bg-blue-600', 'text-white');
            imagesTab.classList.add('bg-gray-100', 'text-gray-700');
            
            // Show/hide sections
            if (productSection) productSection.classList.remove('hidden');
            if (imagesSection) imagesSection.classList.add('hidden');
        });

        imagesTab.addEventListener('click', function() {
            // Update tab styles
            imagesTab.classList.remove('bg-gray-100', 'text-gray-700');
            imagesTab.classList.add('bg-blue-600', 'text-white');
            productTab.classList.remove('bg-blue-600', 'text-white');
            productTab.classList.add('bg-gray-100', 'text-gray-700');
            
            // Show/hide sections
            if (productSection) productSection.classList.add('hidden');
            if (imagesSection) imagesSection.classList.remove('hidden');
        });
    }

    // Image gallery functionality
    function viewImage(src) {
        if (modalImage && imageModal) {
            modalImage.src = src;
            imageModal.classList.remove('hidden');
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        }
    }

    function closeModal() {
        if (imageModal) {
            imageModal.classList.add('hidden');
            document.body.style.overflow = ''; // Restore scrolling
        }
    }

    // Thumbnail click handler
    function toExchangeImage(imgElement) {
        if (mainImage) {
            mainImage.src = imgElement.src;
            mainImage.alt = imgElement.alt;
            
            // Update active thumbnail state
            thumbnails.forEach(thumb => {
                thumb.parentElement.classList.remove('border-blue-400');
                thumb.parentElement.classList.add('border-gray-200');
            });
            imgElement.parentElement.classList.remove('border-gray-200');
            imgElement.parentElement.classList.add('border-blue-400');
        }
    }

    // Add click handlers
    if (mainImage) {
        mainImage.addEventListener('click', function() {
            viewImage(this.src);
        });
    }

    thumbnails.forEach(function(thumbnail) {
        thumbnail.addEventListener('click', function() {
            toExchangeImage(this);
        });
    });

    // Close modal on click outside image
    if (imageModal) {
        imageModal.addEventListener('click', function(e) {
            if (e.target === imageModal) {
                closeModal();
            }
        });
    }

    // Close modal on ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && imageModal && !imageModal.classList.contains('hidden')) {
            closeModal();
        }
    });

    // Make functions globally available
    window.viewImage = viewImage;
    window.closeModal = closeModal;
    window.toExchangeImage = toExchangeImage;
});
