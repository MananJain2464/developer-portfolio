export const projectsData = [

    {
        id: 1,
        name: 'Anime Recommendation & Search System',
        description: "Built a hybrid recommendation system using TF-IDF and collaborative filtering over a 10K+ anime dataset. Developed a Flask-based app supporting personalized recommendations and search with trailers, ratings, and metadata. Employed DVC and GCS for model versioning and experiment tracking with Comet-ML. Deployed using Jenkins CI/CD and Docker on Google Kubernetes Engine (GKE), achieving efficient scaling and zero-downtime delivery.",
        tools: ['Python', 'Flask', 'DVC', 'Docker', 'Jenkins', 'GKE', 'GCP', 'Comet-ML', 'SQL', 'HTML', 'CSS' , 'NLP' , 'Deep Learning', 'Collaborative Filtering'],
        role: 'Deep Learning Engineering , MLOps , Full Stack Development',
        code: 'https://github.com/MananJain2464/Anime_recommedation_system.git',
        demo: 'http://35.224.140.74/',
    },

    {
        id: 2,
        name: 'DeepFake Audio Detection & Fraud Call Classifier',
        description: "Developed a system to detect DeepFake audio and classify fraud calls. Used Librosa to extract 25 audio features and trained an LSTM-based neural network on 10,000+ samples to achieve 95% accuracy in real vs fake classification. Additionally, built a fraud call classifier using Naïve Bayes, trained on over 50,000 conversations. Integrated LLM-based speech-to-text processing to allow real-time audio input and classification.",
        tools: ['Python', 'TensorFlow', 'Librosa', 'LSTM', 'NLP', 'Naïve Bayes', 'Streamlit', 'Scikit-learn' , 'Machine Learning'],
        role: 'ML Developer',
        code: 'https://github.com/MananJain2464/Deep_Fake-Detection',
        demo: '',
    },

    {
        id: 3,
        name: 'Custom Gun Object Detection Model',
        description: "Created an object detection system for identifying guns in surveillance images. Used a Kaggle dataset and PyTorch to train a FasterRCNN Resnet custom model. Tracked training metrics using TensorBoard (2-hour training time), integrated DVC for pipeline version control, and served the model via a FastAPI backend tested on Postman. Notably, the DVC pipeline optimizes re-runs only on modified files, saving time. This project marked my first venture into image detection and fourth project in MLOps.",
        tools: ['Python', 'PyTorch', 'YOLOv5', 'TensorBoard', 'DVC', 'FastAPI', 'Postman', 'OpenCV'],
        role: 'Computer Vision & MLOps Engineer',
        code: 'https://github.com/MananJain2464/Custom_Gun_Object_Detection',
        demo: '',
    },

    {
        id: 4,
        name: 'User Survival Prediction System',
        description: "Built a production-grade User Survival Prediction System using an end-to-end MLOps pipeline. Designed the backend with PostgreSQL and implemented a complete ETL workflow using Astro Airflow. Engineered a feature store using Redis for fast retrieval and trained survival prediction models using Scikit-learn. Built a Flask web app for real-time inference, added data drift detection using Alibi-Detect, and integrated live system monitoring through Prometheus and Grafana. This project demonstrates how to go from raw data ingestion to a fully operational ML system.",
        tools: ['PostgreSQL', 'Astro Airflow', 'Redis', 'Flask', 'Scikit-learn', 'Prometheus', 'Grafana', 'Alibi-Detect', 'psycopg2'],
        role: 'ML Engineer',
        code: 'https://github.com/MananJain2464/Titanic',
        demo: '',
    },

    {
        id: 5,
        name: 'AI-Powered Financial & Market Intelligence Bot',
        description: "An intelligent financial bot that provides stock market analysis and investment insights. Integrated real-time data using Yahoo Finance API, Alpha Vantage, and DuckDuckGo Search for financial metrics and news. Implemented VADER for sentiment analysis and GPT-4 for summarizing financial statements. The system provides buy/hold/sell recommendations by combining sentiment scores, financial ratios, and industry benchmarks. Developed interactive dashboards using Streamlit and Plotly. Customized weight scoring system and included portfolio optimization features.",
        tools: ['Python', 'Streamlit', 'LangChain', 'DeepSeek LLM', 'GPT-4', 'VADER', 'Yahoo Finance API', 'Alpha Vantage', 'DuckDuckGo', 'Plotly', 'Pandas', 'NumPy', 'Prompt Engineering'],
        role: 'Generative AI ',
        code: 'https://github.com/MananJain2464/AI_bot_for_stock_market',
        demo: '',
    },
    
    
    
    {
        id: 6,
        name: 'LLM-based Question Framing and Validation System (Analytica Hackathon)',
        description: "Built a multilingual question validation tool using LLMs to ensure relevance, coherence, and language support. Used GROQ API and MarianMT for language handling and question generation. The model, powered by Llama 3.2, could validate automatically generated questions across diverse contexts. Involved dataset chunking, tagging, and multilingual tokenization. This project was built as part of a hackathon challenge hosted by Inverse AI.",
        tools: ['Python', 'Llama 3.2', 'MarianMT', 'GROQ API', 'Transformers', 'Tokenizers'],
        role: 'LLM Engineer',
        code: 'https://github.com/MananJain2464/Analytica',
        demo: '',
    },
    {
        id: 7,
        name: 'Generative AI & Multi-Agent System Builder',
        description: "Built a multi-agent system using LangChain, LlamaIndex, HuggingFace, Groq, and Auto-GPT. Optimized chatbot interactions with 50% faster response times, improved task automation by 40%, and implemented RAG pipelines to reduce search latency by 30%. The system was powered by vector databases, achieving 60% better query processing. Focused on explainable and scalable LLM applications.",
        tools: ['LangChain', 'LlamaIndex', 'HuggingFace', 'Groq', 'Auto-GPT', 'FAISS'],
        role: 'LLM Systems Architect',
        code: 'https://github.com/MananJain2464/RAGs-and-Agents.git',
        demo: '',
    },
    
    {
        id: 8,
        name: 'AI-Driven Transcript Sentiment Classifier',
        description: "Developed a sentiment classifier on earnings call transcripts of 10 Big Tech companies. Used NLP techniques and fine-tuned transformer models to predict stock movement based on the tone and context of transcripts. Achieved a 70% accuracy with a relatively small dataset of 200+ transcripts. Integrated FinBERT and XGBoost for classification and experimented with LSTM models for temporal understanding.",
        tools: ['Python', 'Transformers', 'FinBERT', 'XGBoost', 'Scikit-learn', 'LSTM', 'Pandas', 'Matplotlib'],
        role: 'ML/NLP Engineer',
        code: '',
        demo: '',
    },  

    {
        id: 9,
        name: 'College Database Management System',
        description: "Designed and built a full-stack College Database Management System using Flask for the backend and WordPress for the frontend. Managed over 1,200 student records, 120+ courses, and 80+ faculty profiles. Developed a robust relational SQL database with 30+ interconnected tables, incorporating advanced relationships and constraints. Implemented full CRUD functionality to handle data seamlessly and built a custom admin panel that reduced manual operations by 50%. This project was recognized as the best in the batch and awarded an A+ grade for design and system efficiency.",
        tools: ['Flask', 'SQL', 'WordPress', 'Jinja', 'HTML/CSS', 'Bootstrap'],
        role: 'Full Stack Developer',
        code: 'https://github.com/MananJain2464/college_database_management_system',
        demo: '',
    },

    {
        id: 10,
        name: 'Microblogging Web App',
        description: "Developed a fully functional microblogging web application inspired by Twitter using Django. Implemented core features such as tweet creation, editing, deletion, and media uploads with real-time image previews. Integrated Django’s built-in authentication system to enable secure user login/logout and ensure user-specific tweet visibility. Added a robust search functionality using Django query filters for quick and accurate tweet retrieval based on content. Utilized Django ORM for efficient database interaction and data modeling, resulting in a clean, scalable codebase.",
        tools: ['Django', 'Python', 'SQLite', 'HTML', 'CSS', 'Bootstrap'],
        role: 'Full Stack Developer',
        code: 'https://github.com/MananJain2464/TweetHub-Mini-Twitter-Clone.git',
        demo: '',
    },

    {
        id: 11,
        name: 'React-Based News Application',
        description: "Built a responsive, multi-page news application using React.js, integrating real-time updates from NewsAPI. Designed categorized sections such as General, Politics, Entertainment, Sports, and Lifestyle for a diverse content experience. Managed application state using React’s useState and useEffect hooks to ensure real-time data flow and seamless updates. Implemented reusable components with props for modular, maintainable code. Integrated React Router for intuitive multi-page navigation and user flow. Focused on responsive design for mobile and desktop compatibility. Optimized API interactions to reduce load times, while implementing error handling for robust performance under varying network conditions.",
        tools: ['React.js', 'JavaScript', 'CSS', 'NewsAPI', 'React Router'],
        role: 'Frontend Developer',
        code: '',
        demo: '',
    },

    

];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
// },