# Backend Project Requirements

## Project Details Database structure

```js
const sampleData = {
  part: 'Complete Application',
  name: 'Farmer App',
  subtitle: 'Web',
  version: 'v3.2.3',
  progress: 70,
  headline: 'Making lives easier',
  description:
    'lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  image: '/sample-image.jpg',
  link: '/projects/farmer-app',
};
```

MongoDB Schema

```js
const projectSchema = new Schema({
  part: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  version: {
    type: String,
    required: true,
  },
  progress: {
    type: Number,
    required: true,
  },
  headline: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});
```
