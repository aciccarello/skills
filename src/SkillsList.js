import React, { Component } from 'react';
import './SkillsList.css';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  title: {
    marginBottom: 16,
    fontSize: 14
  }
};

export class SkillsList extends Component {
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
        <section className="skills-list">
          {skills.map(skill => (
            <div key={skill.name}>
              <Card className="skill-card">
                <CardContent>
                  <Typography variant="headline" component="h2">
                    {skill.name}
                  </Typography>
                  <Typography variant="subheading" paragraph="true">
                    Proficiency: {skill.proficiency}/10
                  </Typography>
                  <Typography className="skill-description" paragraph="true">
                    {skill.description}
                  </Typography>
                  <Divider />
                  <Typography
                    variant="subheading"
                    className="experience-header"
                  >
                    Experience
                  </Typography>
                  <Typography className="skill-description" paragraph="true">
                    {skill.experience}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    color="secondary"
                    href={skill.website}
                    target="__blank"
                    rel="noopener"
                  >
                    Skill Info
                  </Button>
                  <span className="flex" />
                  <div>
                    {skill.tags.map(tag => <Chip key={tag} label={tag} />)}
                  </div>
                </CardActions>
              </Card>
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

export default withStyles(styles)(SkillsList);
