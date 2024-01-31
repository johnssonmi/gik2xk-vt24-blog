import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getOne } from '../services/PostService';
import { Button, Chip, TextField } from '@mui/material';
import TagField from '../components/TagField';

function PostEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const emptyPost = { title: '', body: '', imageUrl: '', tags: [] };
  const [post, setPost] = useState(emptyPost);

  useEffect(() => {
    if (id) {
      getOne(id).then((post) => setPost(post));
    } else {
      setPost(emptyPost);
    }
  }, [id]);

  function onChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    const newPost = { ...post, [name]: value };
    setPost(newPost);
  }

  function onSave() {}

  return (
    <form>
      <div>
        <TextField
          onChange={onChange}
          value={post.title}
          name="title"
          id="title"
          label="Titel"
        />
      </div>
      <div>
        <TextField
          onChange={onChange}
          value={post.body}
          multiline
          minRows={5}
          name="body"
          id="body"
          label="Innehåll"
        />
      </div>
      <div>
        <TextField
          onChange={onChange}
          value={post.imageUrl}
          name="imageUrl"
          id="imageUrl"
          label="Sökväg till bild"
        />
      </div>
      <div>
        {post?.tags?.length > 0 &&
          post.tags.map((tag) => <Chip key={tag} label={tag} />)}
      </div>
      <div>
        <TagField />
      </div>
      <div>
        <Button variant="contained" onClick={() => navigate(-1)}>
          Tillbaka
        </Button>
        {id && (
          <Button variant="contained" color="error">
            Ta bort
          </Button>
        )}
        <Button onClick={onSave} variant="contained" color="success">
          Spara
        </Button>
      </div>
    </form>
  );
}

export default PostEdit;
