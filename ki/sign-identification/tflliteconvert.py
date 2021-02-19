import tensorflow as tf

# Convert the model
converter = tf.lite.TFLiteConverter.from_saved_model("E:/gdki-ws-20-21-projekt/ki/sign-identification/exported-models/version_5/saved_model") # path to the SavedModel directory
converter.allow_custom_ops = True
tflite_model = converter.convert()

# Save the model.
with open('model.tflite', 'wb') as f:
  f.write(tflite_model)