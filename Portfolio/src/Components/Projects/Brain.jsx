import React from "react";
// If you have local screenshots, import them and replace the placeholders below.
// import Shot1 from "/images/brain/shot1.png";
// import Shot2 from "/images/brain/shot2.png";
// import Shot3 from "/images/brain/shot3.png";
import Shot1 from "../../../public/Images/Brain.jpg";
import Shot2 from "../../../public/Images/B2.png";
import Shot3 from "../../../public/Images/B3.png";



export default function Brain() {
  const screenshots = [
    Shot1,
    Shot2,
    Shot3
    // Replace with Shot1, Shot2, Shot3 if you imported local images
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#0b0b15] to-black text-white flex flex-col justify-center">
      {/* Hero */}
      <header className="px-6 lg:px-10 pt-14 pb-6 border-b border-white/10">
        <div className="max-w-6xl mx-auto">
          <p className="inline-block text-xs tracking-wider uppercase bg-indigo-600/20 text-indigo-300 px-3 py-1 rounded-full">
            Research Project
          </p>
          <h1 className="mt-4 text-3xl md:text-5xl font-extrabold">
            Brain Tumor Classification (DL)
          </h1>
          <p className="mt-3 max-w-3xl text-gray-300">
            A deep learning pipeline to classify brain MRI scans into{" "}
            <span className="text-teal-300">Glioma</span>,{" "}
            <span className="text-teal-300">Meningioma</span>,{" "}
            <span className="text-teal-300">Pituitary</span>, and{" "}
            <span className="text-teal-300">No Tumor</span>. Designed with
            robust preprocessing, class-balanced training, and careful model
            evaluation for reliable performance.
          </p>

          {/* Quick stats */}
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="text-xs text-gray-400">Dataset Size</div>
              <div className="text-xl font-semibold">3,500+ images</div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="text-xs text-gray-400">Classes</div>
              <div className="text-xl font-semibold">4</div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="text-xs text-gray-400">Model</div>
              <div className="text-xl font-semibold">CNN / Transfer</div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="text-xs text-gray-400">Accuracy*</div>
              <div className="text-xl font-semibold">~93% (val)</div>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://github.com/HarshiitaaRajoriiaa/Brain-Tumor-Classifiction"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 px-4 py-2 font-semibold"
            >
              GitHub Repo
            </a>
            {/* <a
              href="#"
              className="inline-flex items-center gap-2 rounded-xl border border-teal-400/50 text-teal-300 hover:bg-teal-500/10 px-4 py-2 font-semibold"
            >
              Live Demo
            </a> */}
            <a
              href="https://www.kaggle.com/datasets/iashiqul/brain-tumor-mri-image-classification"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-pink-400/50 text-pink-300 hover:bg-pink-500/10 px-4 py-2 font-semibold"
            >
              Kaggle Dataset
            </a>
          </div>
        </div>
      </header>

      {/* Image Showcase */}
      <section className="px-6 lg:px-10 py-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {screenshots.slice(0, 3).map((src, i) => (
            <figure
              key={i}
              className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5"
            >
              <img
                src={src}
                alt={`Project screenshot ${i + 1}`}
                className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />
              <figcaption className="px-4 py-3 text-sm text-gray-300 border-t border-white/10 bg-black/30">
                Screenshot {i + 1}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Content Sections */}
      <main className="px-6 lg:px-10 pb-16">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8">
          {/* Description */}
          <section className="lg:col-span-2 rounded-2xl p-6 border border-white/10 bg-gradient-to-br from-indigo-900/30 via-blue-900/20 to-transparent">
            <h2 className="text-2xl font-semibold text-indigo-300">
              Description
            </h2>
            <p className="mt-3 text-gray-300 leading-relaxed">
              The system ingests MRI scans, applies normalization and
              augmentation, and trains a convolutional model (with transfer
              learning variants) to classify tumors into four categories. The
              pipeline focuses on{" "}
              <span className="text-teal-300">data quality</span>,{" "}
              <span className="text-teal-300">class balance</span>, and{" "}
              <span className="text-teal-300">robust validation</span>.
              Evaluation uses accuracy, F1-score, confusion matrices, and ROC
              metrics to ensure generalization beyond the training set.
            </p>
          </section>

          {/* Tech Stack */}
          <aside className="rounded-2xl p-6 border border-white/10 bg-white/5">
            <h3 className="text-xl font-semibold text-teal-300">Tech Stack</h3>
            <ul className="mt-3 space-y-2 text-gray-300">
              <li>Python, Jupyter</li>
              <li>TensorFlow / Keras (CNN, Transfer Learning)</li>
              <li>NumPy, Pandas, scikit-learn</li>
              <li>Matplotlib, seaborn (metrics & viz)</li>
              <li>(Frontend showcase) React + Tailwind CSS</li>
            </ul>
          </aside>

          {/* What I Learned */}
          <section className="lg:col-span-2 rounded-2xl p-6 border border-white/10 bg-white/5">
            <h3 className="text-xl font-semibold text-pink-300">
              What I Learned
            </h3>
            <ul className="mt-3 grid sm:grid-cols-2 gap-3 text-gray-300">
              <li className="rounded-lg bg-black/40 border border-white/10 p-3">
                Effective data augmentation strategies for medical imaging.
              </li>
              <li className="rounded-lg bg-black/40 border border-white/10 p-3">
                Managing class imbalance with weighted loss & sampling.
              </li>
              <li className="rounded-lg bg-black/40 border border-white/10 p-3">
                Transfer learning trade-offs (speed vs. accuracy).
              </li>
              <li className="rounded-lg bg-black/40 border border-white/10 p-3">
                Reading metrics beyond accuracy: F1, ROC, confusion matrix.
              </li>
            </ul>
          </section>

          {/* Dataset */}
          <aside className="rounded-2xl p-6 border border-white/10 bg-gradient-to-br from-blue-900/30 via-indigo-900/20 to-transparent">
            <h3 className="text-xl font-semibold text-blue-300">Dataset</h3>
            <p className="mt-3 text-gray-300 leading-relaxed">
              Public <span className="text-blue-300">Kaggle</span> dataset with{" "}
              <span className="text-teal-300 font-semibold">
                3,500+ MRI images
              </span>{" "}
              across four classes: Glioma, Meningioma, Pituitary, and No Tumor.
              Images were normalized, resized, and augmented (flip/rotate/shift)
              to strengthen generalization and reduce overfitting.
            </p>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-lg bg-black/40 border border-white/10 p-3">
                <div className="text-xs text-gray-400">Split</div>
                <div className="font-semibold">Train / Val / Test</div>
              </div>
              <div className="rounded-lg bg-black/40 border border-white/10 p-3">
                <div className="text-xs text-gray-400">Preprocessing</div>
                <div className="font-semibold">Normalize, Resize, Augment</div>
              </div>
            </div>
          </aside>
        </div>

        {/* Footnote */}
        <p className="mt-10 text-sm text-gray-500 max-w-6xl mx-auto">
          *Reported accuracy is validation-set performance; real-world results
          depend on data quality, acquisition differences, and deployment setup.
        </p>
      </main>
    </div>
  );
}
