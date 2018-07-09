import React, { Component } from 'react';
import './SkillsList.css';

export default class SkillsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      skills: []
    };
  }

  render() {
    const { error, isLoaded, skills } = this.state;

    if (error) {
      return (
        <p>
          <strong>Error: </strong> {error}
        </p>
      );
    } else if (!isLoaded) {
      return <p>Loading...</p>;
    } else if (!skills || !skills.length) {
      return <p>No skills to show</p>;
    } else {
      return (
        <section>
          {skills.map(skill => (
            <div key={skill.name}>
              <h3>
                {skill.name} ({skill.proficiency}/10)
              </h3>
              <p>{skill.description}</p>
              <a href={skill.website} target="__blank" rel="noopener">
                More Info
              </a>
              <ul>{skill.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
            </div>
          ))}
        </section>
      );
    }
  }

  componentDidMount() {
    if (!window.fetch) {
      this.setState({
        error: 'Your browser does not support the fetch API'
      });
    }

    fetch(process.env.PUBLIC_URL + '/skills.json')
      .then(results => results.json())
      .then(r => r.skills)
      .then(
        skills => {
          this.setState({
            isLoaded: true,
            skills
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error: (error || 'Unknown API load error').toString()
          });
        }
      );
  }
}
