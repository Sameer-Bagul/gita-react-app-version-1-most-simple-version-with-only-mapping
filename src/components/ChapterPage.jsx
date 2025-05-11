import { useParams } from 'react-router-dom';
import gitaData from '../data/gita.json';

function ChapterPage() {
  const { chapterId } = useParams(); // Get chapterId from URL params
  const chapter = gitaData.chapters[chapterId]; // Access chapter by string ID
  const verses = gitaData.verses[chapterId];

  // Ensure chapter exists before rendering
  if (!chapter) {
    return <h2>Chapter not found!</h2>;
  }

  return (
    <div className="chapter-detail">
      <h1>{chapter.name} - {chapter.name_meaning}</h1>
      <p>{chapter.chapter_summary}</p>
      <div className="verses">
        {verses
          ? Object.values(verses).map((verse, index) => (
              <div key={index} className="verse">
                <h3>Verse {verse.verse_number}</h3>
                <p><strong>Text:</strong> {verse.text}</p>
                <p><strong>Meaning:</strong> {verse.meaning}</p>
                <p><strong>Word Meanings:</strong> {verse.word_meanings}</p>
              </div>
            ))
          : <p>No verses found for this chapter.</p>
        }
      </div>
    </div>
  );
}

export default ChapterPage;
