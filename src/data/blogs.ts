import { BlogPost } from '@/types/blog'

export const blogs: BlogPost[] = [
  {
    id: 'what-is-machine-learning',
    title: 'What is Machine Learning?',
    description: 'My quick learnings about machine learning in a nutshell.',
    content: `## What is Machine Learning?

Machine learning is about teaching computers to learn from data, rather than writing endless if-then-else code. Spam filters are the classic example. They analyze lots of spam and normal emails, learn what's suspicious, and automatically block problematic messages. The key insight: just dumping data doesn't help. The model has to actually learn from it.

## The Old Way vs The New Way

Old school spam filters worked by spotting spammy words like "free" or "4U" and hardcoding rules. But then spammers got creative. They'd write "For U" instead of "4U", and suddenly your code breaks or needs constant maintenance.

In contrast, a spam filter based on machine learning techniques automatically notices that "For U" has become unusually frequent in spam flagged by users, and it starts flagging them without your intervention. Machine learning filters adapt by learning new patterns automatically, without manual intervention.

## Real World Applications

Machine learning is essential for complex problems like speech recognition. You can't just hardcode sound rules for all accents and background noise. The computer needs to figure it out from examples.

You can also inspect ML models to see what they've learned. Take that spam filter again. Once it's trained, you can peek inside and see which words it thinks are the strongest spam indicators. Sometimes you'll discover unexpected patterns or correlations you never noticed before. This process of digging through data to find hidden insights is called data mining, and machine learning is great at it.

## The ML Toolbox

Machine learning handles an incredible range of tasks: detecting tumors in medical imaging, classifying products on production lines, recommending your next show, or spotting credit card fraud. The methods are diverse too: neural networks, transformers, random forests. It's a comprehensive toolbox for solving data-driven problems.

## The Big Picture

It feels like the evolution from manually tweaking CSS hacks to using a framework that just works and adapts automatically.

`,
    date: '2025-12-07',
    author: 'Aniket Goyal',
    tags: ['AI', 'Machine Learning', 'Data Science', 'Python', 'TensorFlow', 'Keras'],
    readTime: '3 min read',
  }
]

export const getBlogById = (id: string): BlogPost | undefined => {
  return blogs.find(blog => blog.id === id)
}