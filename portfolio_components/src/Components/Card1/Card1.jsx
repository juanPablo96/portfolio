import React from "react";
import "./card1.css";
import logo from "../../assets/react.svg";
import Button from "./Button/Button";

function Card1(props) {
  return (
    <>
      <div className="ContainerCard1">
        <article className="card1">
          <div className="imgContainer ">
            <img src={logo} alt="" />
          </div>
          <section className="content">
            <div className="details">
              <h2>
                {props.name} <br />
                <span>{props.position}</span>
              </h2>
              <div className="statics">
                <h3>
                  {props.posts} <br /> <span>Posts</span>
                </h3>
                <h3>
                  {props.followers} <br /> <span>Followers</span>
                </h3>
                <h3>
                  {props.following} <br /> <span>Following</span>
                </h3>
              </div>
              <div className="buttons">
                <Button action="Follow" />
                <Button action="Message" />
              </div>
            </div>
          </section>
        </article>
      </div>
    </>
  );
}

export default Card1;
