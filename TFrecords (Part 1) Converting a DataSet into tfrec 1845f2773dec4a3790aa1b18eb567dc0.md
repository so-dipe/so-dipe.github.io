# TFrecords (Part 1): Converting a DataSet into tfrecord files

FEBRUARY 4, 2023

When taking ML/Deep Learning Courses, it is common to have access to pre-loaded datasets like MNIST, FashionMNIST etc. as they come with Deep Learning frameworks like Tensorflow. But in real-world applications, your dataset would most likely not be readily available like this. Also, It might be too large to fit into memory at once.

TFrecords offer a unique solution to the problem of training models with large datasets. A tensorflow record (tfrecord) is a binary file format designed to be efficient for storing and loading large datasets. They make training an ML model easy and work well with different Deep Learning and Machine Learning libraries.

## HOW?

Here, I’d be showing how to use tfrecords. First, you have to convert your dataset into tfrecords, how to read a tfrecord file and finally, how to train a Machine Learning Model using tfrecords.

In this part, I would be focusing solely on converting your dataset into tfrecords.

For this, I’d be using the ****[RSNA Screening Mammography Breast Cancer Detection](https://www.kaggle.com/competitions/rsna-breast-cancer-detection) dataset. It contains over 50,000 medical images and is over 300GB in size, so it’s perfect for this. It also has a `train.csv` file that contains other useful information about the images and the target.

The first step is usually to load your dataset into a juypter notebook session or your local computer. I’m using a Kaggle Notebook, so this is fairly straightforward.

Here’s a snapshot of the dataset and the first two columns of the `train.csv` file.

![Each folder contains images from a patient.](https://cdn-images-1.medium.com/max/800/1*yxjYpNPmS96m-vdBi3cgzg.png)

Each folder contains images from a patient.

![Each row contains additional information about the patient.](https://cdn-images-1.medium.com/max/800/1*3IS0tqLLzZCP6kLPEMm8YQ.png)

Each row contains additional information about the patient.

The focus here would be to have the image and its corresponding target value as a record/example in the tfrecord file.

The first step is to specify the number of records we want in each tfrecord file. Usually, the number of records depends on your dataset. I’d be using 1000 records here.

```python
NUM_RECORDS = 1000
```

Next, based on the number of records, we figure out how many tfrecord files we would need to store the entire dataset.

```python
num_tfrecords = max(train.shape) // NUM_RECORDS

if max(train.shape) % NUM_RECORDS:
	num_tfrecords += 1  #add one record if there are any remaining samples
```

Then we define some helper functions.

To use tfrecords, we have to define helper functions that would help turn the data into a `tf.train.Feature` object which would later be used as a feature in the `tf.train.Example` protocol buffer. Here we will need different helper functions to handle the different data types in our dataset. Since there are two datatypes in the dataset, `np.ndarray` and `int64` , two helper functions are defined.

Here are the helper functions:

```python
def image_feature(value):
    """Returns a bytes_list from a string / byte."""
    return tf.train.Feature(
        bytes_list=tf.train.BytesList(value=[tf.io.encode_png(value).numpy()])
    )

def int64_feature(value):
    """Returns an int64_list from a bool / enum / int / uint."""
    return tf.train.Feature(int64_list=tf.train.Int64List(value=[value]))
```

`tf.io.encode_png` converts and compresses tensors to png. `tf.io` also contains a `encode_jpg` function to convert tensors to jpg.

Here, I show an additional step for processing the images from Dicom files. Dicom (`.dcm`) files are used for storing medical images and also contain information about the patients. To read `.dcm` files in Python, use the `pydicom` library. Here’s an example

```python
import pydicom as dicom

dcm_path = '.../10006/1459541791.dcm'
ds = dicom.dcm_read(dcm_path) #read dcm file from directory
image = ds.pixel_array #get image
```

With this information, we create a preprocessing function that reads the dcm file from path and converts it to a `(224, 224, 1)` tensor.

```python
def process_image(dcm_path):
    """Read Image from path and resize it to (224, 224)"""
    ds = dicom.dcmread(image_path)
    image = cv2.resize(ds.pixel_array, [224, 224]).reshape(224, 224, 1)
    return image
```

Next, we create a function that writes each example into the tfrecord file. The function takes the preprocessed image and target value as input and returns an instance of `tf.train.Example` . Each feature is processed using the helper functions defined above.

```python
def create_example(image, target):
    """Write example """
    feature = {
        "image": image_feature(image),
        "target": int64_feature(target)
    }
    return tf.train.Example(features=tf.train.Features(feature=feature))
```

Finally, using`tf.io.TFRecordWriter` , we write the dataset into tfrecord files.

```python
for tfrec_num in range(num_tfrecords):
    samples = train['image_id'][(tfrec_num * NUM_RECORDS) : ((tfrec_num + 1) * NUM_RECORDS)]
    tf_dir = tfrecords_dir + f'/tfrecord_{tfrec_num * NUM_RECORDS}-{(tfrec_num + 1) * NUM_RECORDS}.tfrec'
    with tf.io.TFRecordWriter(tf_dir) as writer:
        for sample in samples:
            image_path = train[train['image_id'] == sample]['image_path'].iloc[0]
            image = process_image(image_path)
            target = train[train['image_id'] == sample]['cancer'].iloc[0]
            record = create_example(image, target)
            writer.write(record.SerializeToString())
```

The code above writes the dataset into tfrecord files. The first two lines get the samples/data to be added to the tfrecord file and name the file as `tfrecord_1000–2000.tfrec` (for samples 1000 to 2000).

Data is written to the tfrecord file one at a time. So using a `for` loop, we loop over the samples and using `tf.io.TFRecordWriter` write each sample (example) to the tfrecord file. On the last line, notice the use of `write` and `SerializeToString` methods. The `write` method writes the example and `SerializeToString` converts the example to a binary string.

In the [second part](https://medium.com/@sodipepaul/tfrecords-part-2-reading-and-training-models-with-tfrecords-b13f9cd2e575), we focus on reading data from a tfrecord file and training a Deep Neural Network with tfrecord files.

You can read it here: [TFRecords (Part 2): Reading and training models with Tfrecords.](https://medium.com/@sodipepaul/tfrecords-part-2-reading-and-training-models-with-tfrecords-b13f9cd2e575?source=user_profile---------0----------------------------)

---

by sodipe🌚 on Feburary 4, 2023