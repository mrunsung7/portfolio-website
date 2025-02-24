import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink, X } from "lucide-react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { useState } from "react";
import "react-vertical-timeline-component/style.min.css";

interface Project {
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
}

function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: "Bird Species Classification",
      description:
        "Deep learning model for accurate bird species classification using PyTorch and CNN",
      longDescription:
        "Developed a sophisticated deep learning model utilizing PyTorch and Convolutional Neural Networks (CNN) to accurately classify bird species from images. The model achieves over 95% accuracy on test data and can identify 200+ species of birds. Implemented data augmentation techniques and transfer learning to improve model performance.",
      tags: ["PyTorch", "CNN", "Computer Vision"],
    },
    {
      title: "Travel Recommendation System",
      description:
        "Personalized travel recommendations using Deep Neural Collaborative Filtering",
      longDescription:
        "Created an intelligent travel recommendation system using Deep Neural Collaborative Filtering. The system analyzes user preferences, past travel history, and destination features to provide personalized travel suggestions. Implemented using Flask backend and React frontend, with PostgreSQL database.",
      tags: ["Machine Learning", "Flask", "Neural Networks"],
    },
    {
      title: "Brain Disease & Eye Disease Classification",
      description:
        "Advanced CNN model with fuzzy logic for medical imaging analysis",
      longDescription:
        "Developed a comprehensive medical imaging analysis system combining CNNs with fuzzy logic-enhanced ensemble learning. The system achieves 97% accuracy in brain tumor detection and 94% accuracy in eye disease classification. Implemented multiple CNN architectures (ResNet, DenseNet) and created a novel fuzzy voting system for ensemble decisions.",
      tags: ["PyTorch", "CNN", "Medical Imaging", "Fuzzy Logic"],
    },
    {
      title: "iOS ToDo List & Notes App",
      description: "Native iOS application for task management and note-taking",
      longDescription:
        "Built a feature-rich iOS application using Swift and SwiftUI. Implements local storage with CoreData, cloud sync with iCloud, rich text editing, reminders, and categories. Features include dark mode support, widgets, and Spotlight search integration.",
      tags: ["Swift", "Xcode", "iOS", "CoreData"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-50" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <img
              src="_pic3_.jpeg"
              alt="Profile"
              className="w-40 h-40 rounded-full mx-auto mb-8 object-cover ring-4 ring-blue-500/50"
            />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text mb-4">
              Ashwin Kumar M
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Full Stack Developer & ML Engineer
            </p>
            <div className="flex justify-center gap-6">
              <a
                href="mailto:mashwinkumarlakshmikanthan@gmail.com"
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                <Mail size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/ashwin-kumar-3428a9204/"
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://github.com/mrunsung7"
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                <Github size={24} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-30" />
        <h2 className="text-3xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
          Experience
        </h2>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element"
            contentStyle={{
              background: "rgba(31, 41, 55, 0.8)",
              color: "#fff",
              backdropFilter: "blur(12px)",
            }}
            contentArrowStyle={{
              borderRight: "7px solid rgba(31, 41, 55, 0.8)",
            }}
            date="Jul 2024 - Sep 2024"
            iconStyle={{
              background: "#3b82f6",
              boxShadow: "0 0 0 4px #3b82f6",
            }}
          >
            <h3 className="font-bold text-xl">Intern</h3>
            <h4 className="text-blue-400">7 Stones Digital</h4>
            <p className="text-gray-300">
              Worked on full-stack development projects using modern
              technologies
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </section>

      {/* Projects */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-30" />
        <div className="container mx-auto px-6 relative">
          <h2 className="text-3xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-800/50 backdrop-blur-lg rounded-lg p-6 border border-gray-700/50 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-gray-800 rounded-lg p-8 max-w-2xl w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
              >
                <X size={24} />
              </button>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                {selectedProject.title}
              </h3>
              <p className="text-gray-300 mb-6">
                {selectedProject.longDescription}
              </p>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Accomplishments */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-30" />
        <div className="container mx-auto px-6 relative">
          <h2 className="text-3xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
            Accomplishments
          </h2>
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 backdrop-blur-lg rounded-lg p-6 border border-gray-700/50"
            >
              <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                Academic Publications
              </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  Submitted Bird Species Classification research to Scientific
                  Reports (Q1 Journals)
                </li>
                <li>
                  Submitted Travel Recommendation System research to Springer
                  journal
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 backdrop-blur-lg rounded-lg p-6 border border-gray-700/50"
            >
              <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                Awards & Recognition
              </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Winner of Design Thinking Workshop 2025</li>
                <li>
                  Shortlisted till 2nd round in Caterpillar-Hackathon 2024
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-30" />
        <div className="container mx-auto px-6 text-center relative">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
            Get In Touch
          </h2>
          <div className="flex justify-center gap-6">
            <a
              href="mailto:mashwinkumarlakshmikanthan@gmail.com"
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 px-6 py-3 rounded-lg flex items-center gap-2 transition-all duration-300"
            >
              <Mail size={20} />
              Email Me
            </a>
            <a
              href="https://www.linkedin.com/in/ashwin-kumar-3428a9204/"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 px-6 py-3 rounded-lg flex items-center gap-2 transition-all duration-300"
            >
              <Linkedin size={20} />
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
