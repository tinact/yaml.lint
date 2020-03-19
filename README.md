# Action: YAML Lint

This action will lint YAML files.

## Inputs

### config_path

Use a custom lint configuration.

## Example Usage

```yaml
- name: YAML Lint
  uses: tinact/yaml.lint@master
  with:
    config_path: tests/.yamllint.yml
```

## Sponsor

- [ITIGO AG](https://itigo.ch)

## License

This project is under the MIT License. See the [LICENSE](licence) file for the full license text.

## Copyright

(c) 2020, Tinact
