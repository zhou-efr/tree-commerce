import json
from random import choice
import logging
from requests import get

# with open('data.json', 'w', encoding='utf-8') as f:
#     json.dump(data, f, ensure_ascii=False, indent=4)


def main():
    logging.info('Dump begin')
    trees_url = 'https://tree-commerce-api.herokuapp.com/trees/random/64'
    response = get(trees_url)
    trees = response.json()

    continent = ['Africa', 'Asia', 'Oceania', 'Europe', 'North America', 'South America', 'Ocean']
    colors = ['green', 'yellow', 'red', 'orange', 'purple', 'brown', 'black']
    colors_counter = {'green': 0, 'yellow': 0, 'red': 0, 'orange': 0, 'purple': 0, 'brown': 0, 'black': 0}
    season = ['Spring', 'Summer', 'Autumn', 'Winter']
    life_expectancy = ['short', 'medium', 'long']
    collection = ['', 'Kenya', 'Tea Party', 'Post-Apocalypse', 'Summer by the sea', 'Cozy winter']
    images = {}

    logging.info('Picture dump begin')
    unsplash_url = 'https://api.unsplash.com/search/photos'
    for color in colors:
        logging.info(f'{color} picture dump begin')
        headers = {'Authorization': 'Client-ID YI6nUkbTsY4KIiC7tfIkZ9ymgySzM7244BkuJRUTG5U'}
        params = {'query': f'{color} tree', 'per_page': '64'}
        response = get(unsplash_url, headers=headers, params=params)
        images[color] = response.json()['results']
        logging.info(f'{color} picture save begin')
        with open(f'{color}.json', 'w', encoding='utf-8') as f:
            json.dump(images[color], f, ensure_ascii=False, indent=4)
        logging.info(f'{color} picture save end')
        logging.info(f'{color} picture dump end')
    logging.info('Picture dump end')

    logging.info('Trees creation start')
    for tree in trees:
        tree['continent'] = choice(continent)
        temp_color = choice(colors)
        tree['color'] = temp_color
        tree['picture'] = images[temp_color][colors_counter[temp_color]]['urls']['regular']
        tree['picture_author'] = images[temp_color][colors_counter[temp_color]]['user']['name']
        tree['picture_author_link'] = images[temp_color][colors_counter[temp_color]]['user']['links']['html']
        tree['picture_link'] = images[temp_color][colors_counter[temp_color]]['links']['html']
        colors_counter[temp_color] += 1
        tree['season'] = choice(season)
        tree['life_expectancy'] = choice(life_expectancy)
        tree['collection'] = choice(collection)
        tree['price'] = choice(range(100, 10000))
    logging.info('Trees creation end')

    logging.info('Trees save start')
    with open('data.json', 'w', encoding='utf-8') as f:
        json.dump(trees, f, ensure_ascii=False, indent=4)
    logging.info('Trees save end')
    logging.info('Dump end')


if __name__ == '__main__':
    main()
