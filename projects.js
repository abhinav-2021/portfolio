function createProjectBoxes() {
    const grid = document.getElementById('projectsGrid');
    const boxClasses = ['box-small', 'box-medium' , 'box-large' ];



    // Generate 6 skeleton boxes
    for (let i = 0; i < 24; i++) {
        const skeleton = document.createElement('div');
        skeleton.className = `project-box skeleton ${boxClasses[Math.floor(Math.random() * boxClasses.length)]}`;
        grid.appendChild(skeleton);
    }

    // Simulate API/database call with timeout
    setTimeout(() => {
        // Clear skeletons
        grid.innerHTML = '';
        
        // Real project data
        const projects = [
            {
                title: "E-commerce Platform",
                description: "React & Node.js shopping solution",
                image: "https://cdn.dribbble.com/userupload/10143818/file/original-ec4e4fa04860283313d392559eb16e6a.png?format=webp&resize=640x480&vertical=center",
                delay: 1,
                url: "https://cdn.dribbble.com/userupload/10143818/file/original-ec4e4fa04860283313d392559eb16e6a.png?format=webp&resize=640x480&vertical=center"
            },
            {
                title: "Canava Chatbot",
                description: "Python NLP chatbot",
                image: "https://muffingroup.com/blog/wp-content/uploads/2023/03/Be-recipe-2.png",
                delay: 2,
                url: "https://muffingroup.com/blog/wp-content/uploads/2023/03/Be-recipe-2.png"
            },
            {
                title: "Abhinav kourav - Portfolio",
                description: "My personal portfolio crafted to showcase my project works and skills.",
                image: "portfolio-ss.jpg",
                url: "https://abhinav-2021.github.io/portfolio/",
                delay: 3
            },
            {
                title: "AI Chatbot",
                description: "Python NLP chatbot",
                image: "https://cdn.dribbble.com/userupload/15950772/file/original-50b208c019067e53a48fdef80a43e958.png?format=webp&resize=640x480&vertical=center",
                delay: 4
            },

            {
                title: "AI Chatbot",
                description: "Python NLP chatbot",
                image: "https://cdn.dribbble.com/userupload/15950772/file/original-50b208c019067e53a48fdef80a43e958.png?format=webp&resize=640x480&vertical=center",
                delay: 5
            },
            {
                title: "E-commerce Platform",
                description: "React & Node.js shopping solution",
                image: "https://cdn.dribbble.com/userupload/27302525/file/original-ade92aedb522d95b81c03cb8c66407c6.png?resize=1024x768&vertical=center",
                delay: 6,
                url: "https://cdn.dribbble.com/userupload/27302525/file/original-ade92aedb522d95b81c03cb8c66407c6.png?resize=1024x768&vertical=center"
            },
            {
                title: "Canava Chatbot",
                description: "Python NLP chatbot",
                image: "https://fireart.studio/wp-content/uploads/2021/09/4-10-1024x750.jpg",
                
            },
            {
                title: "E-commerce Platform",
                description: "React & Node.js shopping solution",
                image: "https://cdn.dribbble.com/userupload/14826460/file/still-6376723b9cc707c030bdf4280edf9b5d.png?format=webp&resize=400x300&vertical=center",
            },

                
            {
                title: "E-commerce Platform",
                description: "React & Node.js shopping solution",
                image: "https://i.pinimg.com/736x/61/20/2c/61202c7adab7715eb47d55af2c80494e.jpg",               
               
            },
            {
                title: "E-commerce Platform",
                description: "React & Node.js shopping solution",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKpyHSI0pKIAK2MS6IvOkXRSqNoWElgXdMAw&s",
            },
                
            {
                title: "E-commerce Platform",
                description: "React & Node.js shopping solution",
                image: "https://images.pexels.com/assets/static/images/canva/photo-background-remover.png?w=400",               
               
            },
            {
                title: "E-commerce Platform",
                description: "React & Node.js shopping solution",
                image: "https://cdn.dribbble.com/userupload/10143818/file/original-ec4e4fa04860283313d392559eb16e6a.png?format=webp&resize=640x480&vertical=center",
                delay: 1,
                url: "https://cdn.dribbble.com/userupload/10143818/file/original-ec4e4fa04860283313d392559eb16e6a.png?format=webp&resize=640x480&vertical=center"
            },
            {
                title: "Canava Chatbot",
                description: "Python NLP chatbot",
                image: "https://muffingroup.com/blog/wp-content/uploads/2023/03/Be-recipe-2.png",
                delay: 2,
                url: "https://muffingroup.com/blog/wp-content/uploads/2023/03/Be-recipe-2.png"
            },
            {
                title: "E-commerce Platform",
                description: "React & Node.js shopping solution",
                image: "https://i.pinimg.com/736x/36/15/4f/36154f696cd69a994e2c093225177f1d.jpg",
                url: "https://i.pinimg.com/736x/36/15/4f/36154f696cd69a994e2c093225177f1d.jpg",
                delay: 3
            },
            {
                title: "AI Chatbot",
                description: "Python NLP chatbot",
                image: "https://cdn.dribbble.com/userupload/15950772/file/original-50b208c019067e53a48fdef80a43e958.png?format=webp&resize=640x480&vertical=center",
                delay: 4
            },

            {
                title: "AI Chatbot",
                description: "Python NLP chatbot",
                image: "https://cdn.dribbble.com/userupload/15950772/file/original-50b208c019067e53a48fdef80a43e958.png?format=webp&resize=640x480&vertical=center",
                delay: 5
            },
            {
                title: "E-commerce Platform",
                description: "React & Node.js shopping solution",
                image: "https://cdn.dribbble.com/userupload/27302525/file/original-ade92aedb522d95b81c03cb8c66407c6.png?resize=1024x768&vertical=center",
                delay: 6,
                url: "https://cdn.dribbble.com/userupload/27302525/file/original-ade92aedb522d95b81c03cb8c66407c6.png?resize=1024x768&vertical=center"
            },
            {
                title: "Canava Chatbot",
                description: "Python NLP chatbot",
                image: "https://fireart.studio/wp-content/uploads/2021/09/4-10-1024x750.jpg",
                
            },
            {
                title: "E-commerce Platform",
                description: "React & Node.js shopping solution",
                image: "https://cdn.dribbble.com/userupload/14826460/file/still-6376723b9cc707c030bdf4280edf9b5d.png?format=webp&resize=400x300&vertical=center",
            },

                
            {
                title: "E-commerce Platform",
                description: "React & Node.js shopping solution",
                image: "https://i.pinimg.com/736x/61/20/2c/61202c7adab7715eb47d55af2c80494e.jpg",               
               
            },
            {
                title: "E-commerce Platform",
                description: "React & Node.js shopping solution",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKpyHSI0pKIAK2MS6IvOkXRSqNoWElgXdMAw&s",
            },
                
            {
                title: "E-commerce Platform",
                description: "React & Node.js shopping solution",
                image: "https://images.pexels.com/assets/static/images/canva/photo-background-remover.png?w=400",               
               
            },
            {
                title: "Canava Chatbot",
                description: "Python NLP chatbot",
                image: "https://fireart.studio/wp-content/uploads/2021/09/4-10-1024x750.jpg",
                
            },

            
            {
                title: "AI Chatbot",
                description: "Python NLP chatbot",
                image: "https://cdn.dribbble.com/userupload/15950772/file/original-50b208c019067e53a48fdef80a43e958.png?format=webp&resize=640x480&vertical=center",
                delay: 5
            },

            
        ];

        document.addEventListener('click', (e) => {
            const projectBox = e.target.closest('.project-box');
            const viewProjectBtn = e.target.closest('.view-project-btn');
            
            if (viewProjectBtn) {
                // Handle button click
                const projectUrl = viewProjectBtn.dataset.projectUrl;
                window.location.href = projectUrl;
            } else if (projectBox) {
                // Handle entire box click (optional)
                const projectUrl = projectBox.dataset.projectUrl;
                window.location.href = projectUrl;
            }
        });


        // Create real project boxes with stagger
        projects.forEach((project, index) => {
            const box = document.createElement('div');
            box.className = `project-box ${boxClasses[index % boxClasses.length]}`;
            box.style.animationDelay = `${index * 0.15}s`;
            box.style.backgroundImage = `url('${project.image}')`;
            box.dataset.projectUrl = project.url; 

            const overlay = document.createElement('div');
            overlay.className = 'project-overlay';
            overlay.innerHTML = `
                <div class="overlay-content">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <button class="view-project-btn" data-project-url="${project.url}">
                
            </button>
                </div>
            `;

            box.appendChild(overlay);
            grid.appendChild(box);
        });
    }, 2000); // Simulated 2s loading delay
}


    // Initialize lazy loading
    const lazyLoader = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                const img = entry.target;
                img.style.backgroundImage = `url('${img.dataset.image}')`;
                lazyLoader.unobserve(img);
            }
        });
    });

    document.querySelectorAll('.project-box').forEach(box => {
        lazyLoader.observe(box);
    });


// Initialize on load
window.addEventListener('DOMContentLoaded', () => {
    createProjectBoxes();
    
    // Click handlers
    document.querySelectorAll('.project-box').forEach(box => {
        box.addEventListener('click', () => {
            // Get project data from DOM or use data attributes
            const title = box.querySelector('h3').textContent;
            console.log('Opening project:', title);
            
            // Add your project handling logic here:
            // window.location.href = project.url;
            // openModal(project);
        });
    });
});


const overlay = document.createElement('div');
overlay.className = 'project-overlay';
overlay.innerHTML = `
    <div class="overlay-content">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <small>View Project →</small>
    </div>
`;

// Responsive grid adjustment
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        // Refresh layout if needed
        document.querySelectorAll('.project-box').forEach(box => {
            box.style.height = ''; // Reset any calculated heights
        });
    }, 250);
});



