import pandas as pd
import numpy as np
import seaborn as sns
import matplotlib.pyplot as plt


books = pd.read_csv('./data/final_data.csv', sep=";", encoding='latin-1')
print(books.head(2))