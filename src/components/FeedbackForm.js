import React from "react";

import { rhythm } from "../utils/typography";

export default ({ slug, labels }) => {
  return (
    <form
      name={`post-${slug}`}
      method="post"
      data-netlify="true"
      style={{
        marginBottom: rhythm(2.5)
      }}
    >
      <input type="hidden" name="form-name" value={`post-${slug}`} />

      <h1>{labels.title}</h1>
      <p>{labels.message}</p>

      <p>
        <label>
          {labels.name} <input type="text" name="name" />
        </label>
      </p>
      <p>
        <label>
          {labels.email} <input type="text" name="email" />
        </label>
      </p>
      <p>
        <label>
          {labels.textarea} <textarea name="feedback" />
        </label>
      </p>
      <p>
        <label>
          <input name="newsletter" type="checkbox" />{" "}
          <span>{labels.newsletter}</span>
        </label>
      </p>
      <p>
        <button type="submit">{labels.submit}</button>
      </p>
    </form>
  );
};
