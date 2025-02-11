#include "wafer.h"

#define L 256
#define Q 240

int main(void) {
  uint8_t audio[L * L];

  for (int y = 0; y < L; ++y)
    for (int x = 0; x < L; ++x)
      audio[y * L + x] = x & y & Q ? 0 : 255;

  wafer_file *file = wafer_open("wafer-example.wav");
  wafer_set_channels(file, 1);
  wafer_set_samples_per_sec(file, 22050);
  wafer_write_metadata(file);
  wafer_write_data(audio, sizeof audio, file);
  wafer_close(file);
}
