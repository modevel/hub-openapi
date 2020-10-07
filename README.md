![GitHub CI](https://github.com/DiPA-Projekt/hub-openapi/workflows/GitHub%20CI/badge.svg)

# DiPA - hub-OpenAPI

## Entwicklungsumgebung einrichten

- https://jdk.java.net/archive/
- https://maven.apache.org/download.cgi

## API generieren

Die Code-Generierung erfolgt mittels des Befehls: `sh generate.sh`

## API verwenden

Um die API als Abhängigkeit installieren zu können, müssen für die Client-Entwicklung NPM und für die Server-Entwicklung MAVEN eingestellt werden. Die versionierten Artefakte der API sind im GitHub Repository (GitHub Packages) hinterlegt.

### GitHub Auth Token anlegen

Einen `GITHUB_TOKEN` muss jeder Entwickler in seinem Profil erstellen: https://github.com/settings/tokens

![GitHub-Auth-Token](/doc/GitHub-Auth-Token.jpg)

### NPM konfiguration

```bash
npm config set @dipa-projekt:registry https://npm.pkg.github.com
npm config set '//npm.pkg.github.com/:_authToken' <GITHUB_TOKEN>
```

Einen `GITHUB_TOKEN` muss jeder Entwickler in seinem Profil erstellen: https://github.com/settings/tokens

### MAVEN konfiguration

Die `settings.xml` muss im User-Verzeichnis im Ordner `.m2` hinterlegt werden. (`~/.m2/settings.xml`)

```xml
<settings xmlns="http://maven.apache.org/SETTINGS/1.0.0"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://maven.apache.org/SETTINGS/1.0.0
                      http://maven.apache.org/xsd/settings-1.0.0.xsd">

  <activeProfiles>
    <activeProfile>github</activeProfile>
  </activeProfiles>

  <profiles>
    <profile>
      <id>github</id>
      <repositories>
        <repository>
          <id>central</id>
          <url>https://repo1.maven.org/maven2</url>
          <releases><enabled>true</enabled></releases>
          <snapshots><enabled>true</enabled></snapshots>
        </repository>
        <repository>
          <id>github</id>
          <name>GitHub OWNER Apache Maven Packages</name>
          <url>https://maven.pkg.github.com/dipa-projekt/hub-openapi</url>
				<releases><enabled>true</enabled></releases>
				<snapshots><enabled>true</enabled></snapshots>
        </repository>
      </repositories>
    </profile>
  </profiles>

  <servers>
    <server>
      <id>github</id>
      <username>GITHUB_USERNAME</username>
      <password>GITHUB_TOKEN</password>
    </server>
  </servers>
</settings>
```

Einen `GITHUB_TOKEN` muss jeder Entwickler in seinem Profil erstellen: https://github.com/settings/tokens
