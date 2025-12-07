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
  },
  {
    id:'types-of-machine-learning-systems',
    title: 'Types of Machine Learning Systems',
    description: 'A comprehensive guide to the different types of machine learning systems.',
    content: `## Introduction

Machine learning systems can be categorized along three main dimensions: supervision type, batch vs. online learning, and instance-based vs. model-based approaches. These criteria combine in different ways. For example, a spam filter might be online, model-based, and supervised all at once.

## 1. Training Supervision

### 1.1 Supervised Learning

In supervised learning, training data comes with labels (the desired outputs). The model learns to map inputs to these known outputs.

**Classification** tasks assign categories. Think spam versus ham emails (a classic supervised learning problem), or identifying whether an image contains a cat or dog.

**Regression** tasks predict numerical values. For instance, predicting a car's price from its mileage, age, and brand.

A quick note on terminology: use "target" for regression and "label" for classification. Features are the predictors or attributes. Logistic regression is interesting because it can handle both classification and regression tasks.

### 1.2 Unsupervised Learning

Unsupervised learning works with data that has no labels. The system finds patterns on its own.

- **Clustering**: Groups similar data points together. Like grouping blog visitors into segments (teens who love comics versus weekend sci-fi adults).

- **Visualization**: Transforms complex data into 2D or 3D plots while preserving the underlying structure.

- **Dimensionality reduction**: Merges correlated features into simpler representations. For example, a car's mileage and age are both related to wear and tear, so you might combine them into a single "vehicle condition" metric.

> **Tip**: Try dimensionality reduction before running other algorithms. It often leads to faster training, less memory usage, and sometimes better performance.

- **Anomaly detection**: Identifies unusual patterns after learning what "normal" looks like.

- **Novelty detection**: Similar to anomaly detection but requires super clean training data.

- **Association rules**: Discovers relationships between items. For example, a grocery store might discover that customers who buy BBQ sauce and chips are likely to also buy steak.

### 1.3 Semi-Supervised Learning

Semi-supervised learning uses a few labeled examples and lots of unlabeled data. This is practical because labeling data is expensive and time-consuming.

For example, a photo service might cluster faces unsupervised, then add just one label per cluster. That single label propagates to all similar faces in the cluster.

### 1.4 Self-Supervised Learning

Self-supervised learning generates labels automatically from unlabeled data. A common approach: mask parts of an image, train the model to reconstruct the missing parts, then use this pretrained model and fine-tune it for real tasks like pet classification.

This connects to **transfer learning**, a key concept. Large language models mask words, predict them, then fine-tune for specific tasks like chatbots. Many treat self-supervised learning as its own distinct category.

### 1.5 Reinforcement Learning

In reinforcement learning, an agent observes the environment, takes actions, receives rewards or penalties, and learns an optimal policy through trial and error.

Examples include robots learning to walk, or AlphaGo playing millions of games against itself to eventually beat the world Go champion.

## 2. Batch vs Online Learning

The second dimension categorizes how the learning process handles data over time. Do you train on all data at once, or learn incrementally as new data arrives?

### 2.1 Batch Learning

Batch learning trains on the entire dataset from scratch. It's an offline process and can be resource-intensive.

The main problem is data drift or model rot. The world changes, but your model doesn't. The solution is periodic retraining on fresh data, ideally automated.

Batch learning works fine for problems that change slowly (like cat versus dog classification). It's tougher for rapidly changing domains like stock prices, and can be costly when dealing with massive datasets.

### 2.2 Online Learning

Online learning trains incrementally. Data arrives in mini-batches sequentially, and the model updates continuously. It's fast and adapts in real-time.

Gradient descent is commonly used. Online learning excels when you need to adapt to rapid changes, have limited computational resources, or need out-of-core learning for huge datasets that don't fit in memory.

**Learning rate matters:**

- **High learning rate**: Fast adaptation but risks catastrophic forgetting (the model forgets old patterns).

- **Low learning rate**: More stable and resistant to noise and outliers, but adapts more slowly.

**Important warnings:**

- Despite the name, out-of-core learning is usually still offline processing.

- Bad data can poison live systems quickly through bugs or attacks. Monitor both performance and inputs. Use anomaly detection (see section 1.2) to catch issues early. Be ready to pause or revert if something goes wrong.

## 3. Instance-Based vs Model-Based Learning

The third dimension distinguishes how the system represents what it has learned. Does it memorize examples, or does it build a general model?

### 3.1 Instance-Based Learning

This is the simplest form of learning. The system memorizes training examples and compares new cases using a similarity measure.

A spam filter example: flag emails that are identical or very similar (e.g., sharing many words) to known spam emails.

The system classifies new cases by looking at the majority class of the most similar training instances. This is like k-nearest neighbors (k-NN).

**Pros**: Works well with small, frequently changing datasets.

**Cons**: Doesn't scale well. You need the full training set in production. Similarity searches can be slow. Struggles with high-dimensional data like images.

### 3.2 Model-Based Learning

Model-based learning builds a mathematical model from training examples, then uses that model to make predictions on new data. Most machine learning workflows follow this approach.

Instead of memorizing examples like instance-based learning, you're learning the underlying pattern or relationship in the data.

**How it works:**

Let's say you want to predict house prices. You have data showing that larger houses generally cost more, and there's a roughly linear relationship.

1. **Model selection**: You choose a model type. For a linear relationship, you might pick: price = θ₀ + θ₁ × size

2. **Training**: The algorithm finds the best values for θ₀ and θ₁ by minimizing a cost function (measuring how far off the predictions are from actual prices). This is the learning phase.

3. **Inference**: Once trained, you can predict prices for new houses by plugging their size into your learned formula.

**Why model-based learning?**

Unlike instance-based learning that just looks up similar examples, model-based learning captures the general pattern. This means:

- It can make predictions even for cases quite different from the training data
- It's more efficient (you store the model parameters, not all training examples)
- It often produces smoother, more generalizable predictions
- It scales better to large datasets

**Typical workflow:**

1. Study the data and understand the problem
2. Select an appropriate model type
3. Train the model (find parameters that minimize the cost function)
4. Evaluate and validate the model
5. Use it to predict on new cases (inference)

If predictions aren't good enough, you might add more features, collect better data, or try a more powerful model (like polynomial regression for non-linear relationships).

## Conclusion

These three dimensions: supervision type, batch vs. online learning, and instance-based vs. model-based combine to create different types of machine learning systems. A single system can mix and match these approaches. For instance, that spam filter from the introduction combines supervised learning (it learns from labeled spam/ham emails), online learning (it adapts as new emails arrive), and model-based learning (it builds a model rather than just memorizing examples).

Understanding these categories helps you choose the right approach for your problem and understand how different ML systems work under the hood.

`,
    date: '2025-12-08',
    author: 'Aniket Goyal',
    tags: ['Machine Learning', 'AI', 'Data Science', 'ML Fundamentals', 'Supervised Learning', 'Unsupervised Learning'],
    readTime: '10 min read',
  }
]

export const getBlogById = (id: string): BlogPost | undefined => {
  return blogs.find(blog => blog.id === id)
}