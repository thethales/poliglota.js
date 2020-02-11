# Poliglota.js

Ligthweight client side processing JS library designed to facilitate the generation of 
variable content to multi language webpages.

## Getting Started


These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.
The project still is on is infacy, therefore perfomance issues might be possible

### Prerequisites

Note: The browser must have Javascript Support

A JSON file containing the proper setences in the desired languages must be created following the sample.json or according to the strcute below

```
{
    "pt-br": {
        "1": "Olá",
        "2": "Seja Bem Vindo"
    },
    "en-us": {
        "1": "Hello",
        "2": "Welcome"
    }
}
```


### Installing

Donwload the files of the library and place them inside your project JS library folder

Make the reference to the javascrit file

```
<script src='poliglota.js'></script>
```

Call the constructor

```
<script>
    //The first parameter corresponds to the requested language
    //The second paramenter corresponds to the JSON data, be it a file URL or a JSON object
    poliglota.init('en-us', '\data.json');
</script>
```

Done


## Contributing

Please read [CONTRIBUTING.md](/CONTRIBUTING.md) for details, code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Thales** - *Initial work* - [thethales](https://github.com/thethales)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* This little project was made out of a imediate code necessity, feel free to contribute and suggest any improvments.
