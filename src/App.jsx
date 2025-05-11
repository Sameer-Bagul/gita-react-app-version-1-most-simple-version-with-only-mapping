import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChapterCard from './components/ChapterCard';
import ChapterPage from './components/ChapterPage';
import gitaData from './data/gita.json';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chapter/:chapterId" element={<ChapterPage />} />
      </Routes>
    </Router>
  );
}

function Home() {
  return (
    <div className="chapter-list">
      <h1>Bhagavad Gita - Chapters</h1>
      <div className="chapters">
        {Object.keys(gitaData.chapters).map((key) => (
          <ChapterCard key={key} chapter={gitaData.chapters[key]} chapterId={key} />
        ))}
      </div>
    </div>
  );
}

export default App;
