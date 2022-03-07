import React from "react";

export default function AsidePC() {
  return (
    <>
      <aside>
        <span class="filter-title">
          <h2>Filters</h2>
          <button class="btn btn-text-secondary"> clear</button>
        </span>
        <h2>Price</h2>
        <input type="range" min="1" max="100" value="50" class="slider" />
        <h2>Category</h2>
        <span>
          <input type="checkbox" />
          <label for="Action">Action</label>
        </span>
        <span>
          <input type="checkbox" />
          <label for="Adventure">Adventure</label>
        </span>
        <span>
          <input type="checkbox" />
          <label for="Online">Online</label>
        </span>
        <span>
          <input type="checkbox" />
          <label for="Horror">Horror</label>
        </span>

        <h2>Rating</h2>
        <span>
          <input type="radio" name="4star" id="" />
          <label for="4star">4 Stars & above</label>
        </span>
        <span>
          <input type="radio" name="4star" id="" />
          <label for="3star">3 Stars & above</label>
        </span>
        <span>
          <input type="radio" name="4star" id="" />
          <label for="2star">2 Stars & above</label>
        </span>
        <span>
          <input type="radio" name="4star" id="" />
          <label for="1star">1 Star & above</label>
        </span>

        <h2>Sort by</h2>
        <span>
          <input type="radio" name="sort" id="" />
          <label for="HtoL">High to Low</label>
        </span>
        <span>
          <input type="radio" name="sort" id="" />
          <label for="LtoH">Low to High</label>
        </span>
        <span>
          <input type="radio" name="sort" id="" />
          <label for="NtoO">New to Old</label>
        </span>
        <span>
          <input type="radio" name="sort" id="" />
          <label for="OtoN">Old to New</label>
        </span>
      </aside>
      {/* // sort */}
      <div class="filter-layout-mob">
        <span class="filter-title">
          <h2>Filters</h2>
          <button class="btn btn-text-secondary"> clear</button>
        </span>
        <h2>Price</h2>
        <input type="range" min="1" max="100" value="50" class="slider" />
        <h2>Category</h2>
        <span>
          <input type="checkbox" />
          <label for="Action">Action</label>
        </span>
        <span>
          <input type="checkbox" />
          <label for="Adventure">Adventure</label>
        </span>
        <span>
          <input type="checkbox" />
          <label for="Online">Online</label>
        </span>
        <span>
          <input type="checkbox" />
          <label for="Horror">Horror</label>
        </span>

        <h2>Rating</h2>
        <span>
          <input type="radio" name="4star" id="" />
          <label for="4star">4 Stars & above</label>
        </span>
        <span>
          <input type="radio" name="4star" id="" />
          <label for="3star">3 Stars & above</label>
        </span>
        <span>
          <input type="radio" name="4star" id="" />
          <label for="2star">2 Stars & above</label>
        </span>
        <span>
          <input type="radio" name="4star" id="" />
          <label for="1star">1 Star & above</label>
        </span>
      </div>
      <div class="sort-layout-mob">
        <h2>Sort by</h2>
        <span>
          <input type="radio" name="sort" id="" />
          <label for="HtoL">High to Low</label>
        </span>
        <span>
          <input type="radio" name="sort" id="" />
          <label for="LtoH">Low to High</label>
        </span>
        <span>
          <input type="radio" name="sort" id="" />
          <label for="NtoO">New to Old</label>
        </span>
        <span>
          <input type="radio" name="sort" id="" />
          <label for="OtoN">Old to New</label>
        </span>
      </div>
      <div class="filter-buttons">
        <button id="sort-btn" class="btn btn-icon">
          <i class="fas fa-sort"></i> Sort
        </button>
        <button id="filter-btn" class="btn btn-icon">
          <i class="fas fa-filter"></i> Filter
        </button>
      </div>
    </>
  );
}
